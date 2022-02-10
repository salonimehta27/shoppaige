import {createSlice} from "@reduxjs/toolkit"

const cartsSlice= createSlice({
    name:"carts",
    initialState:{
        entities:null
    },
    reducers:{
        cartProductsAdded(state,action){
            state.entities=action.payload
        },
        cartProductRemoved(state,action){
            // console.log(action.payload)
            // debugger
        //    state.entities.cart_products.filter(prod=>prod.product.id!==action.payload)
           state.entities.cart_products=state.entities.cart_products.filter(prod=>prod.product.id!==action.payload)
        //    debugger
        //    return newState
            // debugger
            // return {...state.entities}
        //    console.log(action.payload)
        //    const index=state.entities.cart_products.indexOf((prod)=>prod.product.id===action.payload)
        //    debugger
        //    return {...state,entities:state.entities.cart_products.splice(index,1)}
          
        }
      
    }
})
export const {cartProductsAdded,cartProductRemoved,totalAdded}=cartsSlice.actions 
export default cartsSlice.reducer
