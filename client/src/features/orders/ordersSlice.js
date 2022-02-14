import { createSlice } from "@reduxjs/toolkit"

const ordersSlice = createSlice({
	name: "orders",
	initialState: {
		entities: [],
		errors: [],
	},
	reducers: {
		ordersAdded(state, action) {
			state.entities = action.payload
		},
		errorsAdded(state, action) {
			state.errors = action.payload
		},
	},
})
export const { ordersAdded, errorsAdded } = ordersSlice.actions
export default ordersSlice.reducer
