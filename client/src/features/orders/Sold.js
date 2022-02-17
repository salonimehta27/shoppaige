import React from "react"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { ordersSold } from "./ordersSlice"
import { Container } from "react-bootstrap"
import SoldProductsDisplay from "./SoldProductsDisplay"
function Sold() {
	const dispatch = useDispatch()
	useEffect(() => {
		fetch("/getOrders")
			.then((res) => res.json())
			.then((data) => {
				dispatch(ordersSold(data))
				console.log(data)
			})
	}, [])
	return (
		<Container style={{ marginTop: "75px" }}>
			<h1 style={{ textAlign: "center" }}>SOLD ORDERS</h1>
			<SoldProductsDisplay />
		</Container>
	)
}

export default Sold
