require "json"

JSON_RECIPE_PATH = "tmp/recipes-en.json".freeze

file_path = Rails.root.join(JSON_RECIPE_PATH)
data = JSON.parse(File.read(file_path))

puts "Seeds started. #{data.size} recipes to be added."

recipes = data.map do |recipe|
  {
    title: recipe["title"],
    image_url: recipe["image"],
    cook_time: recipe["cook_time"],
    prep_time: recipe["prep_time"],
    ingredients: recipe["ingredients"]
  }
end

recipes.each_slice(100) do |batch|
  Recipe.insert_all(batch)
end

puts "Seeds ended!"
