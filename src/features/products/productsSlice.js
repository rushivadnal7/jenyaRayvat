import { createSlice  , createAsyncThunk, isRejectedWithValue} from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk(`products/fetchProducts`, async(_, {isRejectedWithValue}) => {
    try {
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}products`)
        return response.data.products;
    } catch (error) {
        return isRejectedWithValue(error.response.data.message)
    }
})

export const addProduct = createAsyncThunk('products/addproduct', async( newProduct ,{isRejectedWithValue})=> {
    try {
        const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}addproduct`, newProduct)
        return response.data;
    } catch (error) {
        return isRejectedWithValue(error.response.data.message)
    }
})

export const updateProduct  = createAsyncThunk('products/updateProduct' , async ({id , updatedProduct}, {isRejectedWithValue})=> {
    try {
        const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}update`, updatedProduct)
        return response.data
    } catch (error) {
        return isRejectedWithValue(error.response.data.message)
    }
})
const initialState = {
    items: [],
    loading: false,
    error: null,
};

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
    }, 
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending, (state) => {
            state.loading= true
            state.error= null
        }).addCase(fetchProducts.fulfilled, (state,action)=> {
            state.loading = false
            state.items = action.payload
        }).addCase(fetchProducts.rejected, (state,action) => {
            state.loading = false
            state.error = action.payload
        })

    }
})


export default productsSlice.reducer;