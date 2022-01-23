class ProductsController < ApplicationController

    def index 
        products=Product.all
        authorize products
        render json: products
    end

    def show 
        product=Product.find_by(id:params[:id])
        render json: product, status: :ok
    end

    def create 
        product=Product.new(product_params)
        if(product.save)
            # binding.pry
            @current_user.add_role :seller, product 
        end
        authorize product
        render json: product, status: :created
    end

    def update 
        product=Product.find_by(id:params[:id])
        if product.update(product_params)
            current_user.add_role :seller, product
        end
        render json: product
    end

    def destroy
        product=Product.find_by(id:params[:id])
        product.delete
        head :no_content
    end


    private 

    def product_params 
        params.permit(:name,:price,:description,:color,:size,:quantity,:user_id)
    end
end
