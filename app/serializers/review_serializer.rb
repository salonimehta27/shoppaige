class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :review_body, :likes, :created_at
  has_one :product
  has_one :user
end
