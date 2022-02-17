import { createSlice } from "@reduxjs/toolkit"

const ordersSlice = createSlice({
	name: "orders",
	initialState: {
		entities: [],
		errors: [],
		sold: [],
	},
	reducers: {
		ordersAdded(state, action) {
			state.entities = action.payload
		},
		errorsAdded(state, action) {
			state.errors = action.payload
		},
		ordersSold(state, action) {
			state.sold = action.payload
		},
	},
})
export const { ordersAdded, errorsAdded, ordersSold } = ordersSlice.actions
export default ordersSlice.reducer
