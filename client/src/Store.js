import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./features/products/productsSlice"
import currentUserReducer from "./features/signup/signinSlice"

const store=configureStore({
    reducer:{
        products:productsReducer,
        currentUser:currentUserReducer
    }
})


export default store