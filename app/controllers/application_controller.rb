class ApplicationController < ActionController::API
  include ActionController::Cookies
  # include Pundit::Authorization
  include Pundit
  rescue_from Pundit::NotAuthorizedError, with: :user_not_authorized
  rescue_from ActiveRecord::RecordNotFound, with: :record_not_found
  rescue_from ActiveRecord::RecordInvalid, with: :record_invalid

  before_action :authorize

  def current_user 
    User.find_by(id: session[:user_id])
  end
 
  def current_shopping_cart 
    if login?
      cart=current_user.cart
    else 
      if session[:cart_id]
        cart=Cart.find(session[:cart_id])
        
      else
        cart=Cart.create
        session[:cart_id]=cart.id
      end
    end

  end
  private 

  def record_not_found
    render json: {errors: "not found"}, status: :not_found
  end

  def login?
    !!@current_user
  end

  def record_invalid  exception 
    render json: {errors: [exception.record.errors.full_messages]}, status: :unprocessable_entity
  end

  def authorize 
    render json:{errors:["not authorized"]}, status: :unauthorized unless session.include? :user_id
  end

  def user_not_authorized
    render json:{errors: "user not authorized"}, status: :unauthorized
  end

  def shove_cards_from_guest_to_user_account
    if session[:cart_id]
        guest_cart = Cart.find(session[:cart_id])
        guest_cart.cart_products.each { |cart_prod| CartProduct.create(cart_id: current_shopping_cart.id, product_id: product.id)}
        guest_cart.destroy
        session[:cart_id] = nil
    end
  end

end
