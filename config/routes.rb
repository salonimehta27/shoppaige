Rails.application.routes.draw do
  get 'sessions/create'
  get 'sessions/destroy'
  resources :products
  resources :users
  root to: "home#index"

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
