class OrderItemSerializer < ActiveModel::Serializer
  attributes :id, :item_quantity, :product, :images
  has_one :order
  has_one :product
  has_many :images, through: :product
end
