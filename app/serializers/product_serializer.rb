class ProductSerializer < ActiveModel::Serializer
  has_many :images
  # belongs_to :category
  attributes :id, :name, :price, :description, :color, :size, :quantity,:category
end
