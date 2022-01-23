class CategorySerializer < ActiveModel::Serializer
  attributes :id, :products, :name
end
