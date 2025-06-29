class AddIngredientsSearchToRecipes < ActiveRecord::Migration[8.0]
  def change
    add_column :recipes, :ingredients_search, :text
    add_column :recipes, :ingredients_search_vector, :tsvector
  end
end
