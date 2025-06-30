class RecipesController < ApplicationController
  include RecipesHelper

  def index
    @query = params[:query]
    @recipes = if @query
                 Recipe.search_by_ingredients(@query).order(created_at: :desc).page(params[:page]).per(20)
               else
                 Recipe.order(created_at: :desc).page(params[:page]).per(20)
               end

    respond_to do |format|
      format.html
      format.json do
        render json: {
          query: @query,
          recipes: @recipes.map do |recipe|
            {
              id: recipe.id,
              title: recipe.title,
              prep_time: recipe.prep_time,
              cook_time: recipe.cook_time,
              ingredients: recipe.ingredients,
              image_url: normalized_image_url(recipe.image_url),
            }
          end,
          total_pages: @recipes.total_pages,
          total_recipes: @recipes.total_count,
          current_page: @recipes.current_page,
        }
      end
    end
  end
end
