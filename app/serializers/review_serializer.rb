class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :review_body, :likes
  has_one :product
  has_one :user
end
