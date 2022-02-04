require 'stripe'
require 'securerandom'
# skip_before_action :authorize, only: :create
class ChargesController < ApplicationController
  def create 
    Stripe.api_key='sk_test_51KHMZ6LX7eA72NUeag5u1hQJjM2mA4mZzEBxgIuKwpNPkk9ekkolUBze9nUhVqAM0E5WpBUeZaVAacZeT9orYvKj00wXc4izAv'

    payment_intent = Stripe::PaymentIntent.create(
      amount: params[:amount],
      currency: params[:charge][:currency],
      automatic_payment_methods: {
        enabled: true,
      },
      shipping:{
        name:params[:charge][:name],
        address:{
          city:params[:charge][:address][:city],
          country:params[:charge][:address][:country],
          line1:params[:charge][:address][:line1],
          line2:params[:charge][:address][:line2],
          postal_code:params[:charge][:address][:postal_code],
          state:params[:charge][:address][:state]
        }
      }
    )
    puts payment_intent
    render json:{
      clientSecret: payment_intent['client_secret']
    }

  end

  #   session=Stripe::Checkout::Session.create({
  #     line_items:[{
  #       price: params[:price],
  #       quantity:params[:quantity],

  #     }],
  #     mode: "payment",
  #     success_url:'http://localhost:4000'+'?success=true',
  #     cancel_url:'http://localhost:4000'+"?canceled=true",
  #   })
  #   redirect session.url, 303
  # end
end
# '''
# This method doesnot work anymore try different way
#   def create

#     Stripe.api_key ='sk_test_51KHMZ6LX7eA72NUeag5u1hQJjM2mA4mZzEBxgIuKwpNPkk9ekkolUBze9nUhVqAM0E5WpBUeZaVAacZeT9orYvKj00wXc4izAv'
#     ip_key = SecureRandom.uuid
  
#       begin
#         currentUser=User.find_by(id:session[:user_id])
#         customer = Stripe::Customer.create(
#         :email => current_user.email,
#         :source=>params[:charge][:token]
#         # :payment_method => params[:id]
#         )
  
#         puts customer
  
#         charge = Stripe::Charge.create({
#         :customer => customer.id,
#         :amount => params[:charge][:amount],
#         :description => params[:charge][:description],
#         :currency => params[:charge][:currency],
#         }, {
#         :idempotency_key => ip_key
#         })
  
#         puts charge
  
#       rescue Stripe::CardError => e
#         render json: { message: 'oops'}, status: :not_acceptable
#       end
#     end
  
# end
# '''