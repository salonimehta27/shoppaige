class Review < ApplicationRecord
  belongs_to :product
  belongs_to :user
  validates :review_body, presence: true
end
