class CartProductsController < ApplicationController
  skip_before_action :authorize, only: [:create, :destroy, :destroy_all]

  def create
    if (current_user)
      session[:cart_id] = current_user.cart[:id]
      # existing_product
      if !current_order
        order = Order.create
        session[:order_id] = order.id
      end
      if (!product_exists?)
        add_product_to_cart = CartProduct.new(cart_id: session[:cart_id],
                                              product_id: params[:product_id],
                                              order_id: session[:order_id],
                                              item_quantity: params[:item_quantity])
        if (add_product_to_cart.save)
          update_cart_on_add(find_cart_by_session, find_product_by_params)
        end
      else
        update_item_quantity(existing_product)
        update_cart_on_add(find_cart_by_session, find_product_by_params)
      end
    elsif (!session[:cart_id])
      guestCart = Cart.create(total_items: 0, total_amount: 0)
      session[:cart_id] = guestCart[:id]
      order = Order.create
      add_product(guestCart, order)
    else
      guestCart = find_cart_by_session
      order = if (!session[:order_id])
          Order.create
        else
          Order.find(session[:order_id])
        end
      if (!product_exists?)
        add_product(guestCart, order)
      else
        # existing_product
        update_item_quantity(existing_product)
        update_cart_on_add(guestCart, find_product_by_params)
      end
    end
    render json: find_cart_by_session, status: :created
  end

  def update
  end

  def destroy
    # existing_products
    product = existing_products.find_by(product_id: params[:id])
    update_cart_on_delete(find_cart_by_session, product)
    product.destroy
    head :no_content
  end

  def destroy_all
    current_order.update(total_amount: find_cart_by_session[:total_amount])
    find_cart_by_session.update(total_amount: 0, total_items: 0)
    existing_products.each do |cart_product|
      product = Product.find_by(id: cart_product[:product_id])
      OrderItem.create(order_id: current_order.id, product_id: product.id, item_quantity: cart_product[:item_quantity])
      if (product[:quantity] > 0)
        product.update(quantity: (product[:quantity] - cart_product[:item_quantity]))
      else
        render json: { error: "Item is out of stock" }
      end
    end
    existing_products.destroy_all
    session.delete :order_id
  end

  private

  def cart_product_params
    params.require(:cart_product).permit(:cart_id, :product_id, :item_quantity)
  end

  def update_cart_on_add(cart, product)
    # byebug
    cart.update(total_items: cart[:total_items] + params[:item_quantity].to_i,
                total_amount: cart[:total_amount].to_i + product[:price].to_i)
  end

  def update_cart_on_delete(cart, product)
    cart.update(total_items: cart[:total_items] - product[:item_quantity],
                total_amount: cart[:total_amount] - (product.product[:price].to_i * product[:item_quantity]).to_i)
  end

  def existing_products
    return CartProduct.where(cart_id: session[:cart_id])
  end

  def existing_product
    return existing_products.find_by(product_id: params[:product_id])
  end

  def product_exists?
    return existing_products.any? { |prod| prod[:product_id] == params[:product_id] }
  end

  def update_item_quantity(existing_product)
    existing_product.update(item_quantity: existing_product[:item_quantity] + params[:item_quantity].to_i)
  end

  def find_product_by_params
    return Product.find_by(id: params[:product_id])
  end

  def find_cart_by_session
    return Cart.find(session[:cart_id])
  end

  def add_product(guestCart, order)
    add_product_to_cart = CartProduct.new(cart_id: guestCart[:id],
                                          product_id: params[:product_id],
                                          order_id: order.id,
                                          item_quantity: params[:item_quantity])
    session[:order_id] = order.id
    if (add_product_to_cart.save)
      update_cart_on_add(guestCart, find_product_by_params)
    end
  end
end
