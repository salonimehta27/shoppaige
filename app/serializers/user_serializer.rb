class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :avatar, :first_name, :last_name, :email
  has_one :cart
  has_many :roles
end
