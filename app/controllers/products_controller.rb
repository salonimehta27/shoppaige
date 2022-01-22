class ProductsController < ApplicationController

    def index 
        products=Product.all
        authorize products
        render json: products
    end

    def show 

    end

    def create 
        product=Product.create(product_params)
        # authorize
    end

    def destroy

    end
end
