class ProductsController < ApplicationController
 skip_before_action :authorize, only: [:index,:show]
    def index 
        products=Product.all
        render json: products
    end

    def show 
        product=Product.find_by(id:params[:id])
        render json: product, status: :ok
    end

    def user_products
        # byebug
        products=Product.where(user_id:params[:user_id]).to_a
        render json: products
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
        authorize user
        if product.update(product_params)
            current_user.add_role :seller, product
        end
        render json: product
    end

    def destroy
        product=Product.find_by(id:params[:id])
        authorize user
        product.delete
        head :no_content
    end


    private 

    def product_params 
        params.permit(:name,:price,:description,:color,:size,:quantity,:user_id)
    end
end
