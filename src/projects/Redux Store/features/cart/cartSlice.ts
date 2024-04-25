import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import cartItems from "./cartItems";
import errorDo from "./ErrorDo";

interface cartState {
    cartItems: typeof cartItems,
    amount: number,
    total: number,
    isLoading: boolean,
}

const initialState : cartState = {
    cartItems: cartItems,
    amount: 3,
    total: 0,
    isLoading: true,
}

const url = 'https://api.jsonbin.io/v3/qs/66296901e41b4d34e4e9985c';
// https://jsonbin.io

export const getCartItems = createAsyncThunk<cartState[], undefined, {}>("cart/getCartItems", ()=>{
    return fetch(url)
    .then(resp => resp.json())
    .catch(err => console.log(err))
})

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        clearCart: (state) => {
            state.cartItems = [];
        },
        removeItem: (state, action: PayloadAction<string>) => {
            const itemId = action.payload;
            state.cartItems = state.cartItems.filter((item) => item.id !== itemId)
        },
        increase: (state, {payload}: PayloadAction<string>) => {
            const cartItem = state.cartItems.find((item) => item.id === payload);
            cartItem!.amount = cartItem!.amount + 1;
        },
        decrease: (state, {payload}: PayloadAction<string>) => {
            const cartItem = state.cartItems.find((item) => item.id === payload);
            if (cartItem!.amount - 1 == 0) {
                state.cartItems = state.cartItems.filter((item) => item.id !== payload)
            } 
            cartItem!.amount = cartItem!.amount - 1;
        },
        calculateTotals: (state) => {
            let amount = 0;
            let total = 0;
            state.cartItems.forEach((item) => {
                amount += item.amount;
                total += item.amount * (item.price as any as number);
            })
            state.amount = amount;
            state.total = total;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getCartItems.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getCartItems.fulfilled, (state, action) => {
                console.log(action)
                state.isLoading = false;
                state.cartItems = ((action.payload as any)?.record === undefined ? state.cartItems : (action.payload as any).record);
            })                                                                // ? errorDo() : (action.payload as any).record);
            .addCase(getCartItems.rejected, (state) => {
                state.isLoading = false;
            })
    }
})

/*
{
        [getCartItems.pending]:(state) => {
            state.isLoading = true;
        },
        [getCartItems.fulfilled]:(state, action) => {
            state.isLoading = true;
            state.cartItem = action.payload;
        },
        [getCartItems.rejected]:(state) => {
            state.isLoading = false;
        }
    }
*/

export const {clearCart, removeItem, increase, decrease, calculateTotals} = cartSlice.actions;
export default cartSlice.reducer;

export type cartItemsType = {
    [Property in keyof typeof cartItems[0]]: typeof cartItems[0][Property]
};
