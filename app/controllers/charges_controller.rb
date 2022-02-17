require "stripe"
require_relative "../.stripe_key.rb"

class ChargesController < ApplicationController
  skip_before_action :authorize, only: :create

  def create
    Stripe.api_key = $stripe_key

    payment_intent = Stripe::PaymentIntent.create(
      amount: params[:amount],
      currency: params[:charge][:currency],
      automatic_payment_methods: {
        enabled: true,
      },
      receipt_email: params[:charge][:email],
      shipping: {
        name: params[:charge][:name],
        address: {
          city: params[:charge][:address][:city],
          country: params[:charge][:address][:country],
          line1: params[:charge][:address][:line1],
          line2: params[:charge][:address][:line2],
          postal_code: params[:charge][:address][:postal_code],
          state: params[:charge][:address][:state],
        },
      },
    )
    puts payment_intent
    render json: {
      clientSecret: payment_intent["client_secret"],
    }
  end
end
