Rails.application.routes.draw do
  resources :carts
  resources :categories
  get 'sessions/create'
  get 'sessions/destroy'
  resources :products
  resources :users
  post "/signin", to:"sessions#create"
  post "/signup", to:"users#create"
  delete "/signout", to:"sessions#destroy"
  get "/me", to: "users#show" 
  get "/userProducts/:user_id",to: "products#user_products"
  # root to: "home#index"

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
