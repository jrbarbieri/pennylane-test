require 'uri'

module RecipesHelper
  def normalized_image_url(original_url)
    uri = URI.parse(original_url)
    params = URI.decode_www_form(uri.query || "").to_h
    image_url = params["url"]

    return 'https://www.allrecipes.com/img/misc/og-default.png' unless image_url

    encoded_url = URI.encode_www_form_component(image_url)
    "https://imagesvc.meredithcorp.io/v3/mm/image?url=#{encoded_url}&q=60&c=sc&poi=auto&orient=true&h=512"
  end
end
