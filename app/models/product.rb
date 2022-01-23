class Product < ApplicationRecord
    resourcify
    belongs_to :user
    has_one :category

end
