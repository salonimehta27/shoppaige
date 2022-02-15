import React from "react"
import { useSelector } from "react-redux"
import OrdersList from "./OrdersList"

function OrdersDisplay() {
	const orders = useSelector((state) => state.orders.entities)
	const newOrders = [...orders]
	const sorted_orders = newOrders.reverse()
	const list = sorted_orders.map((order) => (
		<OrdersList key={order.id} order={order} />
	))
	return (
		<div>
			<h2>My Orders</h2>
			{orders && list}
		</div>
	)
}

export default OrdersDisplay
