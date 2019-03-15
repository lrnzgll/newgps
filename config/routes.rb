Rails.application.routes.draw do
  devise_for :users
  root to: 'pages#home'
  resources :regions
  resources :routes
  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :home
    end
  end
end


