class RecipesController < ApplicationController
  include RecipesHelper

  def index
    @query = params[:query]
    @page = params[:page] || 1
    service = RecipesService.new(query: @query, page: @page)

    respond_to do |format|
      format.html
      format.json do
        render json: service.serialize_recipes(->(url) { normalized_image_url(url) })
      end
    end
  end
end
