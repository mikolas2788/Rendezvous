class Api::EventsController < ApplicationController
    
    def new 
        @event = Event.new
    end 

    def index 
        @events = Event.all 
        render :index
    end 

    def show
        @event = Event.find_by(id: params[:id])
    end 

    def create
        @event = Event.new(event_params)
        if @event.save 
            Rsvp.create(
                user_id: params[:event][:creator_id], 
                event_id: @event.id)
            render :show 
        else 
            render json: @event.errors.full_messages, status: 422
    end 

    def update 

    end 

    def destroy

    end 

    def event_params

    end 

end
