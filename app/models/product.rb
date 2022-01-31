class Product < ApplicationRecord
    resourcify
    belongs_to :user
    belongs_to :category
    has_many :images

end
