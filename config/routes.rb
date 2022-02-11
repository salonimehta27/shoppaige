Rails.application.routes.draw do
  resources :reviews
  resources :cart_products
  resources :images
  resources :carts
  resources :categories
  get 'sessions/create'
  get 'sessions/destroy'
  resources :products
  resources :users
  post "/payment", to:"charges#create"
  post "/signin", to:"sessions#create"
  post "/signup", to:"users#create"
  delete "/signout", to:"sessions#destroy"
  delete "/clearCart",to:"cart_products#destroy_all"
  get "/sellers", to:"users#get_sellers"
  get "/me", to: "users#show" 
  get "/userProducts/:user_id",to: "products#user_products"
  get "/productsCategory/:category_id",to:"products#product_by_category"
  get "/myCart", to: "carts#current_cart"
  post "/addtocart", to:"cart_products#create"
  # root to: "home#index"
delete "/cart_products/:product_id",to: "cart_products#destroy"
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
