import React, { useEffect, useState } from "react"
import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import PaymentForm from "./PaymentForm"
import { Container } from "react-bootstrap"

const PUBLIC_KEY =
	"pk_test_51KHMZ6LX7eA72NUef0g8uVDUzZ0YhjoRwzJIdRRF2j4Tb0snsrujR0DUu4b1uR3c1ZP3FKZoC7IMTJHfcdzBfCuL00TR6UDKeB"
const stripeTestPromise = loadStripe(PUBLIC_KEY)

function StripeContainer({ name, address, email, totalPrice }) {
	console.log(parseInt(totalPrice))
	const [clientSecret, setClientSecret] = useState("")
	useEffect(() => {
		fetch("/payment", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				amount: parseInt(`${totalPrice}00`),
				currency: "usd",
				name,
				email,
				address,
			}),
		})
			.then((res) => res.json())
			.then((data) => setClientSecret(data.clientSecret))
	}, [])

	const appearance = {
		theme: "stripe",
	}
	const options = {
		clientSecret,
		appearance,
	}
	return (
		<Container style={{ marginTop: "75px" }}>
			<div className="App">
				{clientSecret && (
					<Elements options={options} stripe={stripeTestPromise}>
						<PaymentForm />
					</Elements>
				)}
			</div>
		</Container>
	)
}

export default StripeContainer
