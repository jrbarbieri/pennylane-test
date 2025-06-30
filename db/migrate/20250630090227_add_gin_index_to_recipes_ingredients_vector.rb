class AddGinIndexToRecipesIngredientsVector < ActiveRecord::Migration[8.0]
  disable_ddl_transaction!

  def change
    add_index :recipes, :ingredients_search_vector, using: :gin, algorithm: :concurrently
  end
end
