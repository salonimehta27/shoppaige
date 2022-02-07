class CartProductsController < ApplicationController
    
    def create
    # when a products get added to the cart_product then we are going to update the quantity of the actual product
    #let says i have two of the same product added to my cart i can the decrease the original quantity by item-quantity
    #when the order gets created 
    order=CartProduct.new(cart_product_params)
      if order.save
        product=Product.find(params[:product_id])
        if(product[:quantity]>0)
          product.update(quantity: (product[:quantity]-params[:item_quantity]))
        end
      end
      render json: order, status: :created

    end

    def update

    end

    def destroy
      product=CartProduct.find_by(product_id:params[:id])
      product.destroy
      head :no_content
    end

    def destroy_all

    end

    private

    def cart_product_params
      params.require(:cart_product).permit(:cart_id,:product_id,:item_quantity)

    end
end
