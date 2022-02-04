class Product < ApplicationRecord
    resourcify
    belongs_to :user
    belongs_to :category
    has_many :images
    accepts_nested_attributes_for :images

end
