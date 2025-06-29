class Recipe < ApplicationRecord
  scope :search_by_ingredients, ->(query) {
    sanitized_query = sanitize_sql_array(["websearch_to_tsquery('english', ?)", query])
    where("ingredients_search_vector @@ #{sanitized_query}")
  }
end
