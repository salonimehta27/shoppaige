class CartsController < ApplicationController

 def current_cart
    cart=Cart.find(session[:cart_id])
    render json: cart    
 end


 def create 

 end

 def update 

 end

 def destroy 

 end
end
