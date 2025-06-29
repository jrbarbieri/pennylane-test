class CreateRecipes < ActiveRecord::Migration[8.0]
  def change
    create_table :recipes do |t|
      t.string :title
      t.string :image_url
      t.integer :cook_time
      t.integer :prep_time
      t.text :ingredients, array: true, default: []

      t.timestamps
    end
  end
end
