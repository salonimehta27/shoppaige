class ProductSerializer < ActiveModel::Serializer

  # belongs_to :category
  attributes :id, :active_listing, :name, :price, :description, :color, :size, :quantity, :category, :user_id, :images, :owner
  has_many :images
end
