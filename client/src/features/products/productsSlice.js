import { createSlice } from "@reduxjs/toolkit"

const productsSlice = createSlice({
	name: "products",
	initialState: { entities: [] },
	reducers: {
		productAdded(state, action) {
			state.entities.push(action.payload)
		},
		productRemoved(state, action) {
			state.entities.filter((product) => product.id !== action.payload)
		},
		productFiltered(state, action) {
			state.entities = [action.payload]
		},
		productUpdated(state, action) {
			const index = state.entities.findIndex(
				(product) => product.id === action.payload.id
			)
			const newArr = [...state.entities]
			newArr[index] = action.payload
			state.entities = newArr
			//   if(findProduct){
			//      {...state.entities, action.payload}
			//   }
		},
	},
})

export const { productAdded, productRemoved, productFiltered, productUpdated } =
	productsSlice.actions
export default productsSlice.reducer
