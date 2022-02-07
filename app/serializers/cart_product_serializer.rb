class CartProductSerializer < ActiveModel::Serializer
  attributes :id,:item_quantity,:product,:images
  has_one :cart
  has_one :product
  has_many :images, through: :product
end
