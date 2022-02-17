class UsersController < ApplicationController
  skip_before_action :authorize, only: :create

  def index
    users = User.all
    authorize users
    render json: users
  end

  def show
    user = User.find_by(id: session[:user_id])
    render json: user, status: :ok
  end

  def get_sellers
    sellers = Role.find_by(name: "seller").users
    render json: sellers
  end

  def update
    user = User.find_by(id: session[:user_id])
    user.update(user_params)
    render json: user
  end

  def create
    user = User.create!(user_params)
    session[:user_id] = user.id
    Cart.create!(total_items: 0, total_amount: 0, user_id: user.id)
    move_cart_products_guest_to_user(user)
    if (!session[:cart_id])
      session[:cart_id] = user.cart.id
    end
    render json: user, status: :created
  end

  def get_orders
    orderItems = current_user.order_items
    orders = orderItems.map do |order_item|
      order_item.order
    end.uniq
    render json: orders
  end

  def destroy
    user = User.find(params[:user_id])
    user.delete
    head :no_content
  end

  private

  def user_params
    params.permit(:first_name, :last_name, :username, :avatar, :email, :password, :password_confirmation)
  end
end
