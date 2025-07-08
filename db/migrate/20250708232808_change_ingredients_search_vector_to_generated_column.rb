class ChangeIngredientsSearchVectorToGeneratedColumn < ActiveRecord::Migration[8.0]
  def change
    remove_column :recipes, :ingredients_search_vector
    execute <<-SQL
      ALTER TABLE recipes
      ADD COLUMN ingredients_search_vector tsvector
      GENERATED ALWAYS AS (
        to_tsvector('english', coalesce(ingredients_search, ''))
      ) STORED;
    SQL
  end
end
