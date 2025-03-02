import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const LoginUser = createAsyncThunk('auth/loginUser', async (userCredential , {rejectWithValue}) => {
    try {
        const response = await axios.post(`https://dummyjson.com/auth/login` , userCredential);
        console.log(response.data)
        const {accessToken , ...user} = response.data;
        localStorage.setItem('JWTtoken', accessToken)
        return {user, accessToken}
    } catch (error) {
        return rejectWithValue(error.response.data.message)
    }
})

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
        token : localStorage.getItem('JWTtoken') || null,
        loading: false,
        error: null
    },
    reducers:{
        logout:(state) =>{
            state.user = null
            state.token = null
            localStorage.removeItem('JWTtoken')
        },
    },
    extraReducers: (builder) => {
        builder.addCase(LoginUser.pending,(state) => {
            state.loading = true
            state.error = null
        }).addCase(LoginUser.fulfilled,(state,action) => {
            state.loading = false;
            state.user = action.payload.user;
            state.token = action.payload.token
        }).addCase(LoginUser.rejected, (state , action) => {
            state.loading = false;
            state.error = action.payload
        })
    }
})

export const {logout} = authSlice.actions;
export default authSlice.reducer;