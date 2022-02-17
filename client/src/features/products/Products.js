import React from "react"
import DisplayProduct from "./DisplayProducts"
import { productAdded } from "./productsSlice"
import { useSelector, useDispatch } from "react-redux"
import { useEffect, useState } from "react"

function Products({ currentProduct, setCurrentProduct, currentUser, search }) {
	const dispatch = useDispatch()
	const [errors, setErrors] = useState([])
	const products = useSelector((state) => state.products.entities)
	useEffect(() => {
		fetch("/products").then((r) => {
			if (r.ok) {
				r.json().then((data) => dispatch(productAdded(data)))
			} else {
				r.json().then((err) => setErrors(err))
			}
		})
	}, [])
	return (
		<div className="wrapper">
			{products !== null &&
				products.map((product) => {
					return (
						<>
							{product
								.filter((prod) =>
									prod.name.toLowerCase().includes(search.toLowerCase())
								)
								.map((p) => (
									<DisplayProduct
										key={product.id}
										product={p}
										currentUser={currentUser}
										setCurrentProduct={setCurrentProduct}
									/>
								))}
						</>
					)
				})}
		</div>
	)
}

export default Products
