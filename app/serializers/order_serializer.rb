class OrderSerializer < ActiveModel::Serializer
  attributes :id, :total_amount, :user_id, :order_items, :created_at
  has_many :order_items
  # has_many :products, through: :order_items
  # has_one :user
end
