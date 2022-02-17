import { createSlice } from "@reduxjs/toolkit"

const cartsSlice = createSlice({
	name: "carts",
	initialState: {
		entities: null,
	},
	reducers: {
		cartProductsAdded(state, action) {
			state.entities = action.payload
		},
		cartProductRemoved(state, action) {
			state.entities.cart_products.splice(
				state.entities.cart_products.findIndex(
					(x) => x.product.id === action.payload
				),
				1
			)
		},
		cartProductAmount(state, action) {
			state.entities.total_amount =
				state.entities.total_amount -
				action.payload.currentProduct.product.price *
					action.payload.currentProduct.item_quantity
		},
	},
})
export const {
	cartProductsAdded,
	cartProductRemoved,
	cartProductAmount,
	totalAdded,
} = cartsSlice.actions
export default cartsSlice.reducer
