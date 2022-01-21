class ProductSerializer < ActiveModel::Serializer
  attributes :id, :name, :price, :description, :color, :size, :quantity
end
