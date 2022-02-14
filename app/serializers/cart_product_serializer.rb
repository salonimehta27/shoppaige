class CartProductSerializer < ActiveModel::Serializer
  attributes :id, :item_quantity, :product, :images, :order_id
  has_one :cart
  has_one :product
  belongs_to :order
  has_many :images, through: :product
end
