import { configureStore } from "@reduxjs/toolkit"
import productsReducer from "./features/products/productsSlice"
import currentUserReducer from "./features/signup/signinSlice"
import imagesReducer from "./features/images/imagesSlice"
import cartsReducer from "./features/cart/cartsSlice"

const store = configureStore({
	reducer: {
		products: productsReducer,
		currentUser: currentUserReducer,
		images: imagesReducer,
		carts: cartsReducer,
	},
})

export default store
