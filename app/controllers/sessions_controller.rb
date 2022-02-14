class SessionsController < ApplicationController
  skip_before_action :authorize, only: [:create, :destroy]

  def create
    user = User.find_by(email: params[:email])
    if user&.authenticate(params[:password])
      session[:user_id] = user.id
      order = user.orders.create
      session[:order_id] = order.id
      shove_cards_from_guest_to_user_account(user, session[:order_id])

      # session[:order_id] = order.id
      if (!session[:cart_id])
        cart = Cart.find_by(user_id: user.id)
        session[:cart_id] = cart.id
      end
      render json: user, status: :created
    else
      render json: { errors: ["Invalid email or password"] }, status: :unauthorized
    end
  end

  def destroy
    session.delete :user_id
    session.delete :cart_id
    session.delete :order_id
    head :no_content
  end
end
