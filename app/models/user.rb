class User < ApplicationRecord
  rolify
  has_secure_password
end
