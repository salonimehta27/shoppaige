Rails.application.routes.draw do
  resources :orders, only: [:index]
  resources :reviews, only: [:index, :create]
  resources :cart_products, only: [:create, :destroy, :destroy_all]
  resources :images, only: [:index]
  resources :carts
  resources :products
  resources :users
  #Custom routes
  get "sessions/create"
  get "sessions/destroy"
  get "/getOrders", to: "users#get_orders"
  get "/reviews_by_product/:product_id", to: "reviews#get_reviews_by_product"
  post "/payment", to: "charges#create"
  post "/signin", to: "sessions#create"
  post "/signup", to: "users#create"
  delete "/signout", to: "sessions#destroy"
  delete "/clearCart", to: "cart_products#destroy_all"
  get "/sellers", to: "users#get_sellers"
  get "/me", to: "users#show"
  get "/myorders", to: "orders#user_orders"
  get "/userProducts/:user_id", to: "products#user_products"
  get "/productsCategory/:category_id", to: "products#product_by_category"
  get "/myCart", to: "carts#current_cart"
  post "/addtocart", to: "cart_products#create"
  delete "/cart_products/:product_id", to: "cart_products#destroy"
  # root to: "home#index"

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
