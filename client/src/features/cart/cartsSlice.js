import {createSlice} from "@reduxjs/toolkit"

const cartsSlice= createSlice({
    name:"carts",
    initialState:{
        entities:null,
        totalPrice:null
    },
    reducers:{
        cartProductsAdded(state,action){
            state.entities=action.payload
        },
        cartProductRemoved(state,action){
            console.log(action.payload)
            state.entities.cart_products.filter((prod)=>prod.id!==action.payload)
        },
        totalAdded(state,action){
            state.totalPrice=action.payload
        }

    }
})
export const {cartProductsAdded,cartProductRemoved,totalAdded}=cartsSlice.actions 
export default cartsSlice.reducer
