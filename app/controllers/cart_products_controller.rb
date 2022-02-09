class CartProductsController < ApplicationController
    skip_before_action :authorize, only: [:create,:destroy]


  def create

     if(session[:user_id])
        currentUser=User.find(session[:user_id])
        session[:cart_id]=currentUser[:cart_id]
        existing_product
       if(!product_exists?)
         add_product_to_cart=CartProduct.new(cart_id:currentUser[:cart_id],product_id:params[:product_id],item_quantity:params[:item_quantity])
          if(add_product_to_cart.save)
           find_cart=Cart.find(session[:cart_id])
           find_product=Product.find_by(id:params[:product_id])
           find_cart.update(total_items:find_cart[:total_items]+params[item_quantity].to_i,total_amount:find_cart[:total_amount]+find_product[:price].to_i,user_id:currentUser[:id])
          end
       else
        update_item_quantity existing_product
       end
    elsif(!session[:cart_id])
      guestCart=Cart.create(total_items:0,total_amount:0)
      session[:cart_id]=guestCart[:id]
      add_product(guestCart)
    else
      guestCart=Cart.find(session[:cart_id])
       if(!product_exists?)
        add_product(guestCart)
       else
        existing_product
        update_item_quantity(existing_product)
       end
    end
      render json: add_product_to_cart, status: :created
  end



    def update

    end

    def destroy
      existing_products
      product=existing_products.find_by(product_id:params[:id])
      product.destroy
      head :no_content
    end

    def destroy_all

    end

    private

    def cart_product_params
      params.require(:cart_product).permit(:cart_id,:product_id,:item_quantity)

    end

    def existing_products
      return CartProduct.where(cart_id:session[:cart_id])
    end
    def existing_product
       return existing_products.find_by(product_id:params[:product_id])
    end
    def product_exists?
        return existing_products.any?{|prod| prod[:product_id]==params[:product_id]}
    end
    def update_item_quantity existing_product
      existing_product.update(item_quantity:existing_product[:item_quantity]+params[:item_quantity].to_i)
    end

    def add_product guestCart
      add_product_to_cart=CartProduct.new(cart_id:guestCart[:id],
        product_id:params[:product_id],
        item_quantity:params[:item_quantity])
        find_product=Product.find_by(id:params[:product_id])
        # byebug
        if(add_product_to_cart.save)
          guestCart.update(total_items:guestCart[:total_items]+params[:item_quantity].to_i,
          total_amount:guestCart[:total_amount]+find_product[:price].to_i)
        end

    end
end
  # byebug
     

      # if order.save
      #   product=Product.find(params[:product_id])
      #   if(product[:quantity]>0)
      #     product.update(quantity: (product[:quantity]-params[:item_quantity]))
      #   end