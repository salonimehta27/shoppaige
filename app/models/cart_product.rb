class CartProduct < ApplicationRecord
  belongs_to :cart
  belongs_to :product
  has_many :images, through: :product
end
