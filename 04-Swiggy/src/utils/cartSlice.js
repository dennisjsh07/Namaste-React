import { createSlice, current } from "@reduxjs/toolkit";

// creating a cart slice...
const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state, action)=>{ //here addItem is the action which calls the function.
            state.items.push(action.payload);
        }, 
        removeItem: (state)=>{
            state.items.pop();
        },
        clearCart: (state)=>{
            console.log(current(state))
            state.items.length = 0;
        }
    }
});

export const {addItem, removeItem, clearCart} = cartSlice.actions;

export default cartSlice.reducer;