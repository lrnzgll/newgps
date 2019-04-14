Rails.application.routes.draw do
  require "sidekiq/web"
  mount SimpleDiscussion::Engine => "/forum"
  mount Sidekiq::Web => '/sidekiq'
  
  resources :controllers
  devise_for :users
  root to: 'pages#home'
  get 'pages/data', defaults: { format: :json }
  resources :regions
  resources :counties
  resources :routes
  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :home
    end
  end
end


