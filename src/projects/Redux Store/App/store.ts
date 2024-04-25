import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cartReducer from '../features/cart/cartSlice';
import modalReducer from '../features/modal/modalSlice';

const rootReducer = combineReducers({
  cart: cartReducer,
  modal: modalReducer,
})

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
