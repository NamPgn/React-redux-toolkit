import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { orderProduct } from "../api/order";


export const addToOrder = createAsyncThunk(
    "checkout/addToOrder",
    async (dataOrder) => {
        const {data} = await orderProduct(dataOrder)
        return data;
    }
)

const checkoutSlice = createSlice({
    name: "checkout",
    initialState: {
        value: []
    },
    extraReducers: (builder) => {
        builder.addCase(addToOrder.fulfilled, (state, action) => {
            state.value = action.payload
        })
    }
})

export default checkoutSlice.reducer