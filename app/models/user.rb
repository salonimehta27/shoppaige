class User < ApplicationRecord
  after_create :assign_default_role
  rolify
  has_secure_password
  has_many :products
  has_many :reviews
  # has_many :products, through: :reviews
  has_one :cart, dependent: :destroy

  validate :must_have_a_role, on: :update

  private

  def assign_default_role
    self.add_role(:buyer) if self.roles.blank?
  end

  def must_have_a_role
    unless roles.any?
      errors.add(:roles, "must have atleast one role")
    end
  end
end
