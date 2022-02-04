import {createSlice} from "@reduxjs/toolkit"

const imagesSlice=createSlice({
    name:"images",
    initialState:{entities:[]},
    reducers:{
        imagesAdded(state,action){
            state.entities.push(action.payload)
        },
        imagesRemoved(state,action){
            state.entities.filter(image=>image.id!==action.payload)
        }
    }
})

export const {imagesAdded,imagesRemoved}=imagesSlice.actions
export default imagesSlice.reducer