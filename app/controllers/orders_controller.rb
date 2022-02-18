class OrdersController < ApplicationController
  skip_before_action :authorize, only: :index

  def index
    orders = Order.all
    render json: orders
  end

  def user_orders
    orders = Order.where(user_id: session[:user_id])
    render json: orders
  end
end
