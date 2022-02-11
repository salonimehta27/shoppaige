# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.create!(email:"xyz@test.com",password:"testpassword",password_confirmation:"testpassword",first_name:"xyz",last_name:"test")
User.create!(email:"buyer@test.com",password:"testpassword",password_confirmation:"testpassword",first_name:"buyer",last_name:"test")

# Review.create(review_body:Faker::Lorem.paragraph(sentence_count:3),likes:0,product_id:35,user_id:5)

# users=User.all
# users.each do |user|
#     user.products.each do|product|

#     # 5.times do
#     #     product=Product.create(
#     #         name:Faker::Commerce.product_name,
#     #         description: Faker::Lorem.paragraph(sentence_count:2),
#     #         price:Faker::Commerce.price,
#     #         color:Faker::Commerce.color,
#     #         size:Faker::Commerce.size,


#     #     )
    
#      end



