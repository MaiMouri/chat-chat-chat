Rails.application.routes.draw do
  # devise_for :users, :controllers => { registrations: 'registrations' }
  devise_for :users

  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :channels, only: [] do
        resources :messages, only: [ :index, :create ]
      end
    end
  end

  resources :channels, only: [ :index, :show ]
  root to: 'channels#show'

  mount ActionCable.server => "/cable"
end
