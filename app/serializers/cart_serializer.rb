class CartSerializer < ActiveModel::Serializer
  attributes :id, :total_amount, :total_items
  has_one :user
end
