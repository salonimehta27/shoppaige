import { Form } from "react-bootstrap"
import { productFiltered } from "./features/products/productsSlice"
import { useDispatch } from "react-redux"

function Filter() {
	const dispatch = useDispatch()
	function handleChange(e) {
		fetch(`/productsCategory/${parseInt(e.target.value)}`)
			.then((resp) => resp.json())
			.then((data) => {
				dispatch(productFiltered(data))
			})
	}
	return (
		<Form.Select aria-label="Default select example" onChange={handleChange}>
			<option value="0">Open this select menu</option>
			<option value="1">Clothing</option>
			<option value="2">Decor</option>
			<option value="3">Stationary</option>
			<option value="4">Technology</option>
		</Form.Select>
	)
}

export default Filter
