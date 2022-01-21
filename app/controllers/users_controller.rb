class UsersController < ApplicationController


 def index 
    user=User.all
    render json:user
 end

 def show
    user=User.find(params[:user_id])
    render json: user, status: :ok
 end

 def create 
    user=User.create!(user_params)
    session[:user_id]=user.id
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
