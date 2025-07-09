# frozen_string_literal: true

require 'digest/sha2'

class RecipesService
  CACHE_EXPIRY = 10.minutes
  DEFAULT_PAGE = 1
  DEFAULT_PER_PAGE = 20

  def initialize(query:, page: DEFAULT_PAGE, per_page: DEFAULT_PER_PAGE)
    @query = query
    @page = page
    @per_page = per_page
  end

  def fetch_recipes
    Rails.cache.fetch(cache_key, expires_in: CACHE_EXPIRY) do
      scope = if @query.present?
                Recipe.search_by_ingredients(@query)
              else
                Recipe.all
              end
      paginated = scope.order(created_at: :desc).page(@page).per(@per_page)
      {
        recipes: paginated.map { |recipe| recipe },
        total_pages: paginated.total_pages,
        total_recipes: paginated.total_count,
        current_page: paginated.current_page,
      }
    end
  end

  def cache_key
    query_digest = Digest::SHA256.hexdigest(@query.to_s)
    "recipes/#{query_digest}/page/#{@page}"
  end

  def serialize_recipes(normalized_image_url_proc = nil)
    data = fetch_recipes
    {
      query: @query,
      total_pages: data[:total_pages],
      total_recipes: data[:total_recipes],
      current_page: data[:current_page],
      recipes: data[:recipes].map do |recipe|
        {
          id: recipe.id,
          title: recipe.title,
          prep_time: recipe.prep_time,
          cook_time: recipe.cook_time,
          ingredients: recipe.ingredients,
          image_url: normalized_image_url_proc ? normalized_image_url_proc.call(recipe.image_url) : recipe.image_url,
        }
      end,
    }
  end
end
