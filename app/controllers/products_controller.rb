class ProductsController < ApplicationController
 skip_before_action :authorize, only: [:index,:show,:product_by_category,:user_products]
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
    def product_by_category
        if(params[:category_id].to_i==0)
         products=Product.all
        else
        products=Product.where(category_id:params[:category_id]).to_a
        end
        render json: products
    end

    def create 
        product=Product.new(product_params)
        # binding.pry
        puts Image
        
        if(product.save)
            # binding.pry
            # binding.pry
            current_user=User.find(session[:user_id])
            current_user.add_role(:seller) unless current_user.roles.any?{|role| role.name=="seller"} 
            params[:images].each {|x| Image.create(image_url:x[:image_url],product_id:product.id)}
        end
           
            # puts x[:image_url]
            
            # image.save!
            # Image.create(image_url:x[:image_url],product_id:product.id)
          
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
        params.require(:product).permit(:name,:price,:description,:color,:category_id, :size,:quantity,:user_id,
        images:[:image_url,:product_id])
    end

    # def images_params
    #     params.permit(:image_url,:product_id)
    # end
end
