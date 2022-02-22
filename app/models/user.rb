class User < ApplicationRecord
  after_create :assign_default_role
  rolify
  has_secure_password
  has_many :products, dependent: :destroy
  has_many :reviews, dependent: :destroy
  has_one :cart, dependent: :destroy
  has_many :orders
  has_many :order_items, through: :products
  validates :first_name, :last_name, :username, :password, presence: true, on: :create
  validates_uniqueness_of :username, :email

  private

  def assign_default_role
    self.add_role(:buyer) if self.roles.blank?
  end
end
