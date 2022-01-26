class ApplicationController < ActionController::API
  include ActionController::Cookies
  # include Pundit::Authorization
  include Pundit
  rescue_from Pundit::NotAuthorizedError, with: :user_not_authorized
  rescue_from ActiveRecord::RecordNotFound, with: :record_not_found
  rescue_from ActiveRecord::RecordInvalid, with: :record_invalid

  before_action :authorize
  def current_user 
    @current_user=User.find_by(id: session[:user_id])
  end

  private 

  def record_not_found
    render json: {errors: "not found"}, status: :not_found
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


end
