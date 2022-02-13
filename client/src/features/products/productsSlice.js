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
		productsUpdate(state, action) {
			//   findProduct=  state.entities.find(product=>product.id===action.payload.id)
			//   if(findProduct){
			//      {...state.entities, action.payload}
			//   }
		},
	},
})

export const { productAdded, productRemoved, productFiltered } =
	productsSlice.actions
export default productsSlice.reducer
