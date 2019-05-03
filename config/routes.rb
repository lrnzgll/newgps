Rails.application.routes.draw do
  require "sidekiq/web"
  mount SimpleDiscussion::Engine => "/forum"
  mount Sidekiq::Web => '/sidekiq'
  
  resources :controllers
  devise_for :users
  root to: 'pages#home'
  post '/search', to: 'pages#search'
  resources :regions
  resources :counties
  resources :routes
  resources :users
  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :home
    end
  end
end


