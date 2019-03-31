class Api::GroupsController < ApplicationController

    def new 
        @group = Group.new 
    end 
    
    def index 
        @groups = Group.all 
        render :index 
    end 

    def show 
        @group = Group.find_by(id: params[:id])
    end 

    def create
        @group = Group.new(group_params)
        if @group.save
            render "api/groups/show"
        else 
            render json: @group.errors.full_messages
        end 
    end 

    def update 
        @group = Group.find_by(id: params[:id])
        if @group.save 
            render "api/groups/show"
        else 
            render json: @group.errors.full_messages
        end
    end

    def destroy 
        @group = Group.find_by(id: params[:id])
    end 

    def group_params 
        params.require(:group).permit(
            :title,
            :about,
            :creator_id
        )
    end 

end
