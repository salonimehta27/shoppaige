class ApplicationController < ActionController::API
  include ActionController::Cookies
  rescue_from ActiveRecord::RecordNotFound, with: :record_not_found
  rescue_from ActiveRecord::RecordInvalid, with: :record_invalid

  before_action :authorize

  def current_user
    User.find_by(id: session[:user_id])
  end

  def current_cart
    Cart.find_by(id: session[:cart_id])
  end

  private

  def record_not_found
    render json: { errors: "not found" }, status: :not_found
  end

  def record_invalid(exception)
    render json: { errors: [exception.record.errors.full_messages] }, status: :unprocessable_entity
  end

  def authorize
    render json: { errors: ["not authorized"] }, status: :unauthorized unless session.include? :user_id
  end

  def user_not_authorized
    render json: { errors: "user not authorized" }, status: :unauthorized
  end

  def move_cart_products_guest_to_user(user)
    if session[:cart_id]
      guest_cart = Cart.find(session[:cart_id])
      guest_cart.cart_products.each do |cart_prod|
        CartProduct.create(cart_id: user.cart.id,
                           product_id: cart_prod[:product_id],
                           item_quantity: cart_prod[:item_quantity])
        product = Product.find(cart_prod[:product_id])
        user.cart.update(total_amount: user.cart[:total_amount] + (cart_prod[:item_quantity] * product[:price]).to_i,
                         total_items: user.cart[:total_items] + cart_prod[:item_quantity])
      end
      guest_cart.cart_products.destroy_all
      guest_cart.destroy
      session[:cart_id] = user.cart.id
    end
  end
end
