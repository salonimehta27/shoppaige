class User < ApplicationRecord
  after_create :assign_default_role
  rolify
  has_secure_password
  has_many :products
  has_many :reviews
  has_one :cart, dependent: :destroy
  has_many :orders
  has_many :order_items, through: :products
  # validate :must_have_a_role, on: :update
  # validates :first_name, :last_name, :username, :password, presence: :true, on: :create
  validates_uniqueness_of :username

  private

  def assign_default_role
    self.add_role(:buyer) if self.roles.blank?
  end

  # def must_have_a_role
  #   unless roles.any?
  #     errors.add(:roles, "must have atleast one role")
  #   end
  # end
end
