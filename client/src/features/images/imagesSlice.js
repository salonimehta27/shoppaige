import { createSlice } from "@reduxjs/toolkit"

const imagesSlice = createSlice({
	name: "images",
	initialState: { entities: [], avatar: null },
	reducers: {
		imagesAdded(state, action) {
			state.entities.push(action.payload)
		},
		imagesRemoved(state, action) {
			state.entities.filter((image) => image.id !== action.payload)
		},
		imageRemoveByIndex(state, action) {
			// const index = state.entities.findIndex((image) => image === action.payload);
			state.entities.splice(action.payload, 1)
		},
		avatarAdded(state, action) {
			state.avatar = action.payload
		},
		avatarRemoved(state, action) {
			state.avatar = null
		},
	},
})

export const { imagesAdded, imagesRemoved, imageRemoveByIndex, avatarAdded } =
	imagesSlice.actions
export default imagesSlice.reducer
