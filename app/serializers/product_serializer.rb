class ProductSerializer < ActiveModel::Serializer
  has_many :images
  attributes :id, :name, :price, :description, :color, :size, :quantity
end
