class Api::SessionsController < ApplicationController

    def create 
        debugger
        @user = User.find_by_credentials(
            params[:user][:email],
            params[:user][:password]
        )
        debugger 
        if @user 
            debugger
            login(@user)
            render "api/users/show"
        else 
            render json: ["Invalid Email/Password"], status: 401
        end 
    end 

    def destroy 
        if current_user 
            logout
            render json: ["Not signed in"], status: 200
        end 
    end 

end
