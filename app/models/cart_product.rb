class CartProduct < ApplicationRecord
  belongs_to :cart
  belongs_to :product
  belongs_to :order
  has_many :images, through: :product
end
