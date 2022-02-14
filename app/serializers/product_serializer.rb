class ProductSerializer < ActiveModel::Serializer

  # belongs_to :category
  attributes :id, :name, :price, :description, :color, :size, :quantity, :category, :user_id, :images
  has_many :images
end
