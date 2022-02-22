class Product < ApplicationRecord
  resourcify
  belongs_to :user
  belongs_to :category
  has_many :images
  accepts_nested_attributes_for :images
  has_many :cart_products
  has_many :order_items, dependent: :destroy
  has_many :reviews
  has_many :orders, through: :order_items
  validates :name, :description, :price, :category_id, :color, :quantity, presence: true, on: :create

  def owner
    user = User.find(self.user_id)
    UserSerializer.new(user)
  end
end
