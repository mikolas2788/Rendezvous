class Api::UsersController < ApplicationController

    def create 
        @user = User.new(user_params)
        debugger
        if @user.save
            login(@user)
            render 'api/users/show'
        else 
        debugger
            render json: @user.errors.full_messages, status: 405
        end 
    end 

    def show

    end 

    def index 

    end 

    private 

    def user_params 
        params.require(:user).permit(:email, :password)
    end 

end
