class ReviewsController < ApplicationController
  skip_before_action :authorize, only: :index

  def index
    reviews = Review.all
    render json: reviews
  end

  def get_reviews_by_product
    review = Review.where(product_id: params[:product_id]).to_a
    render json: reviews
  end

  def create
    review = Review.create(review_params)
    render json: review, status: :created
  end
end
