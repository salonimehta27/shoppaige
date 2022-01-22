class Product < ApplicationRecord
    resourcify
    belongs_to :user
end
