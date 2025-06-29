class RecipesController < ApplicationController
  def index
    @query = params[:query]
    @recipes = if @query
                 Recipe.search_by_ingredients(@query).page(params[:page]).per(20)
               else
                 Recipe.order(created_at: :desc).page(params[:page]).per(20)
               end
  end
end
