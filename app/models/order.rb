class Order < ApplicationRecord
  belongs_to :user, optional: true
  has_many :cart_products
  has_many :order_items
  has_many :products, through: :order_items

  # def product_images
  #   self.products.each do |item|
  #     # product = Product.find(item[:product_id])
  #     return item.images
  #   end
  # end
end
