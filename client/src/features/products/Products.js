import React, { useMemo } from "react"
import DisplayProduct from "./DisplayProducts"
import { productAdded } from "./productsSlice"
import { useSelector, useDispatch } from "react-redux"
import { useEffect, useState } from "react"
import Pagination from "../pagination/Pagination"

function Products({ setCurrentProduct, currentUser, search }) {
	const products = useSelector((state) => state.products.entities)
	const dispatch = useDispatch()
	const [errors, setErrors] = useState([])

	useEffect(() => {
		fetch("/products").then((r) => {
			if (r.ok) {
				r.json().then((data) => dispatch(productAdded(data)))
			} else {
				r.json().then((err) => setErrors(err))
			}
		})
	}, [])
	console.log(products)
	return (
		<div className="wrapper">
			{products !== null &&
				products.map((product) => {
					// debugger
					return (
						<>
							{product
								.filter((p) => p.active_listing === true)
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
