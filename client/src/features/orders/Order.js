import React, { useEffect, useState } from "react"
import { Container } from "react-bootstrap"
import { useDispatch } from "react-redux"
import OrdersDisplay from "./OrdersDisplay"
import { ordersAdded, errorsAdded } from "./ordersSlice"

function Order() {
	const dispatch = useDispatch()
	useEffect(() => {
		fetch("/myorders").then((res) => {
			if (res.ok) {
				res.json().then((data) => {
					dispatch(ordersAdded(data))
				})
			} else {
				res.json().then((err) => dispatch(errorsAdded(err)))
			}
		})
	}, [])
	return (
		<Container
			style={{
				marginTop: "75px",
			}}
		>
			<OrdersDisplay />
		</Container>
	)
}

export default Order
