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
            Membership.create(  
                user_id: params[:group][:creator_id], 
                group_id: @group.id)
            render :show
        else 
            render json: @group.errors.full_messages, status: 422
        end 
    end 

    def update
        @group = Group.find_by(id: params[:id])
        if @group.update(group_params)
            render :show
        else 
            render json: @group.errors.full_messages, status: 422
        end
    end

    def destroy 
        @group = Group.find_by(id: params[:id])
        @group.destroy
        render :show
    end 

    def group_params 
        params.require(:group).permit(
            :creator_id,
            :title,
            :about,
            :location
        )
    end

end
