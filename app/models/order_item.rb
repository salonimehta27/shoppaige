class OrderItem < ApplicationRecord
  belongs_to :order
  belongs_to :product
  has_many :images, through: :product

  # def seller
  #   self.when(product.user_id => 3)
  # end
end
