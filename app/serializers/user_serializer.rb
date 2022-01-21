class UserSerializer < ActiveModel::Serializer
  attributes :id, :full_name, :email, :password, :password_confirmation
end
