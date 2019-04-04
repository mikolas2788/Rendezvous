class Api::MembershipsController < ApplicationController

    def create 
        @membership = Membership.new(
            user_id: current_user.id, 
            group_id: params[:group_id])
        @group = Group.find_by(id: params[:group_id])
        if @membership.save
            render 'api/groups/show', group: @group 
        else
            render json: @membership.errors.full_messages, status: 401
        end 
    end 

    def destroy
        @membership = current_user.memberships.find_by(
            group_id: params[:group_id])
        @membership.delete 
        @group = Group.find_by(id: params[:group_id])
        render 'api/groups/show', group: @group 
    end 

end
