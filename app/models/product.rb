class Product < ApplicationRecord
  resourcify
  belongs_to :user
  belongs_to :category
  has_many :images
  accepts_nested_attributes_for :images
  has_many :cart_products
  has_many :order_items
  has_many :reviews, dependent: :destroy
  has_many :orders, through: :order_items
  # has_many :users, through: :reviews

end
