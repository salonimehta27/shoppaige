class AddOrderIdToCartProducts < ActiveRecord::Migration[6.1]
  def change
    add_column :cart_products, :order_id, :bigint
  end
end
