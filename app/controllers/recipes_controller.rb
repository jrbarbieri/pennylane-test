class RecipesController < ApplicationController
  def index
    @recipes = Recipe.order(created_at: :desc).page(params[:page]).per(20)
  end
end
