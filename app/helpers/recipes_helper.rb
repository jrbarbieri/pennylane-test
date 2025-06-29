module RecipesHelper
  def normalized_image_url(url)
    return url if url.blank?

    uri = URI.parse(url)
    if uri.host == "imagesvc.meredithcorp.io" && uri.query.present?
      params = Rack::Utils.parse_query(uri.query)
      original_url = params["url"]
      return original_url if original_url.present?
    end
    url
  rescue URI::InvalidURIError
    url
  end
end
