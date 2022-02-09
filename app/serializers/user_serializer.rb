class UserSerializer < ActiveModel::Serializer
  attributes :id, :username,:avatar,:first_name,:last_name,:email,:roles,:cart
end
