class UsersController < ApplicationController
    skip_before_action :authorize, only: :create

 def index 
    users=User.all
    authorize users
    render json:users
 end

 def show
    user=User.find(params[:user_id])
    authorize user
    render json: user, status: :ok
 end

 def create 
    user=User.create!(user_params)
    session[:user_id]=user.id
    authorize user
    render json: user, status: :created
 end

 def destroy
    user=User.find(params[:user_id])
    user.delete
    head :no_content
 end

 private 

 def user_params
    params.permit(:full_name,:email,:password,:password_confirmation)
 end

end
