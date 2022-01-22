class ApplicationController < ActionController::API
  include ActionController::Cookies
  include Pundit::Authorization
  rescue_from ActiveRecord::RecordNotFound, with: :record_not_found
  rescue_from ActiveRecord::RecordInvalid, with: :record_invalid

  def current_user 
    @current_user=User.find_by(id: session[:user_id])
  end

  private 

  def record_not_found
    render json: {errors: "not found"}, status: :not_found
  end

  def record_invalid  exception 
    render json: {errors: [exceptions.record.errors.full_messages]}, status: :unprocessable_entity
  end

  def authorize 
    render json:{errors:["not authorized"]}, status: :unauthorized unless session.include? :user_id
  end


end
