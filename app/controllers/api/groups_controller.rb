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
        debugger
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
            :location,
            :photo
        )
    end

end

# <ActionController::Parameters {"group"=><ActionController::Parameters {"id"=>"23", "creator_id"=>"1", "title"=>"Puppy lovers of NYC", "about"=>"We love puppiesasdf", "location"=>"NYC"} permitted: false>, "format"=>:json, "controller"=>"api/groups", "action"=>"update", "id"=>"23"} permitted: false>
# <ActionController::Parameters {"group"=><ActionController::Parameters {"id"=>"23", "creator_id"=>"", "title"=>"Puppy lovers of NYC", "about"=>"We love puppies", "location"=>"NYC"} permitted: false>, "format"=>:json, "controller"=>"api/groups", "action"=>"update", "id"=>"23"} permitted: false>