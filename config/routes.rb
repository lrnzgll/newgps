Rails.application.routes.draw do
  devise_for :users
  require "sidekiq/web"
  mount SimpleDiscussion::Engine => "/forum"
  mount Sidekiq::Web => '/sidekiq'
  root to: 'pages#home'
  post '/search', to: 'pages#search'
  resources :regions
  resources :counties
  resources :routes do
    member do
      get 'home'
      get 'data'
      get 'comments'
    end
  end
end
