Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: {format: :json} do 

    resources :users, only: [ :create, :show, :index ] 
    
    resource :session, only: [ :create, :destroy ]

    resources :groups do 
      resources :memberships, only: [ :create ]
      resource :memberships, only: [ :destroy ]
      resources :events 

    end 

    resources :events do 
      resources :rsvps, only: [ :create, :index ]
      resource :rsvps, only: [ :destroy ]
    end   
  end 
  
  root "static_pages#root"
  
end
