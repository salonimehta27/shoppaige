class ApplicationController < ActionController::API
  include ActionController::Cookies
  include Pundit::Authorization

end
