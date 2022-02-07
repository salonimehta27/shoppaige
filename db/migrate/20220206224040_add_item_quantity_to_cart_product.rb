class AddItemQuantityToCartProduct < ActiveRecord::Migration[6.1]
  def change
    add_column(:cart_products, :item_quantity,:integer)
  end
end
