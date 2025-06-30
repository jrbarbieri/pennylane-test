# rubocop:disable Rails/Output
require "json"

JSON_RECIPE_PATH = "recipes-en.json".freeze

file_path = Rails.root.join(JSON_RECIPE_PATH)
data = JSON.parse(File.read(file_path))

puts "Seeds started. #{data.size} recipes to be added."

recipes = data.map do |recipe|
  ingredients_array = recipe["ingredients"] || []
  ingredients_search = ([recipe["title"]] + ingredients_array).join(", ")

  {
    title: recipe["title"],
    image_url: recipe["image"],
    cook_time: recipe["cook_time"],
    prep_time: recipe["prep_time"],
    ingredients: ingredients_array,
    ingredients_search: ingredients_search,
  }
end

recipes.each_slice(100) do |batch|
  Recipe.insert_all(batch)
end

ActiveRecord::Base.connection.execute(
  "UPDATE recipes SET ingredients_search_vector = to_tsvector('english', coalesce(ingredients_search, ''))",
)

puts "Seeds ended!"
# rubocop:enable Rails/Output
