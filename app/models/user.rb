class User < ApplicationRecord
  after_create :assign_default_role
  rolify
  has_secure_password
  has_many :products


  private 
    def assign_default_role
      self.add_role(:buyer) if self.roles.blank?
    end

end
