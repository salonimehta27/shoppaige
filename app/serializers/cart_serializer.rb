class CartSerializer < ActiveModel::Serializer
  attributes :id, :total_amount, :total_items, :user_id,:cart_products
  has_one :user
  has_many :cart_products
end
