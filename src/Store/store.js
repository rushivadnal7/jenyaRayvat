import { configureStore } from "@reduxjs/toolkit";
import authReducer from '../features/auth/authSlice.js'
import productReducer from '../features/products/productsSlice.js'


const store = configureStore({
    reducer: {
        auth : authReducer,
        products : productReducer
    },
})

export default store;