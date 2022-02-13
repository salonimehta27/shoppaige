import { createSlice } from "@reduxjs/toolkit"

const signinSlice = createSlice({
	name: "currentUser",
	initialState: { entities: null },
	reducers: {
		currentUserAdded(state, action) {
			state.entities = action.payload
		},
	},
})

export const { currentUserAdded } = signinSlice.actions
export default signinSlice.reducer
