import React from "react"
import { useSelector } from "react-redux"
import OrdersList from "./OrdersList"
import { Row, Stack } from "react-bootstrap"

function OrdersDisplay() {
	const orders = useSelector((state) => state.orders.entities)
	// console.log(orders)
	// debugger
	// debugger
	const newOrders = [...orders]
	const sorted_orders = newOrders.reverse()
	console.log(sorted_orders)
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
