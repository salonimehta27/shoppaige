# Description

An Ecommerce site that uses Rolify rails gem to add users with different roles, You can be a seller , a buyer or both
it utilizes Amazon S3 for storing Images of the products and Stripe API to handle payments

## [Blog on AWS](https://medium.com/p/bf7e2c3d7e3e)

## [Blog on Implementing Stripe](https://salonimehta27.medium.com/incorporating-stripe-payment-in-react-with-backend-rails-a556d0496798)

## [Demo](https://youtu.be/BKM_MMSvadU)

### [Frontend Code](https://github.com/salonimehta27/shoppaige/tree/main/client)

# Resources

## [Rolify gem](https://github.com/RolifyCommunity/rolify)

# Requirements

- Ruby 2.7.4
- NodeJS (v16), and npm
- Heroku CLI
- Postgresql

# Setup

```
run:

bundle install
rails db:create
npm install --prefix client
You can use the following commands to run the application:

rails s: run the backend on http://localhost:3000
npm start --prefix client: run the frontend on http://localhost:4000
```
