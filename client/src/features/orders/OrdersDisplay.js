import React from "react"
import { useSelector } from "react-redux"
import OrdersList from "./OrdersList"
import { Alert } from "react-bootstrap"

function OrdersDisplay() {
	const orders = useSelector((state) => state.orders.entities)
	const newOrders = [...orders]
	const sorted_orders = newOrders.reverse()
	const list = sorted_orders.map((order) => (
		<OrdersList key={order.id} order={order} />
	))
	return (
		<div>
			<h2 style={{ textAlign: "center" }}>My Orders</h2>
			{orders && orders.length !== 0 ? (
				list
			) : (
				<Alert key="idx" variant="primary">
					No orders yet
				</Alert>
			)}
		</div>
	)
}

export default OrdersDisplay
