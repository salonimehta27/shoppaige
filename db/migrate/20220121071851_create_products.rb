class CreateProducts < ActiveRecord::Migration[6.1]
  def change
    create_table :products do |t|
      t.string :name
      t.integer :price
      t.string :description
      t.string :color
      t.string :size
      t.integer :quantity

      t.timestamps
    end
  end
end
