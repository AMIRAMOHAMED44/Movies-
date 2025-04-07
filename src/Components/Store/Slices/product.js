import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const productAction = createAsyncThunk("products/getAll", async () => {
    const res = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=39c5dbdc102820af73184abe6c3538ac")
    return res.data.results  
})
const productSlice = createSlice({
    name: "products",
    initialState: { products: [] },

    extraReducers: (builder) => {
        builder.addCase(productAction.fulfilled, (state, actions) => {
            state.products = actions.payload
        })

    }

})
export default productSlice.reducer