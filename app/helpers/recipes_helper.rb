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

  def highlight_ingredients(ingredient, query)
    return ingredient if query.blank?

    words = query.to_s.scan(/\w+/).uniq
    return ingredient if words.empty?

    regex = Regexp.union(words.map { |w| Regexp.escape(w) })
    ingredient.gsub(regex) do |match|
      "<mark style=\"background:yellow;font-weight:bold;\">#{match}</mark>"
    end.html_safe
  end
end
