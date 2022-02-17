import React from "react"
import { useSelector } from "react-redux"
import OrdersList from "./OrdersList"

function SoldProductsDisplay() {
	const soldOrders = useSelector((state) => state.orders.sold)
	const newOrders = [...soldOrders]
	const sorted_orders = newOrders.reverse()
	const list = sorted_orders.map((order) => <OrdersList order={order} />)
	return <div>{soldOrders && list}</div>
}

export default SoldProductsDisplay
