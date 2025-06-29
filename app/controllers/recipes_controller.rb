class RecipesController < ApplicationController
  def index
    @recipes = if params[:query]
                 Recipe
                   .where(
                     "EXISTS (SELECT 1 FROM unnest(ingredients) AS ingredient WHERE ingredient ILIKE ?)",
                     "%#{params[:query]}%",
                   ).order(created_at: :desc).page(params[:page]).per(20)
               else
                 Recipe.order(created_at: :desc).page(params[:page]).per(20)
               end
  end
end
