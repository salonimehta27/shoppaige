Rails.application.routes.draw do
  devise_for :users
  root to: "home#index"
  devise_for :user
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
