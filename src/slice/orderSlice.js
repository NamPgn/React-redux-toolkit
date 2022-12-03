import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getAllOrderProducts, getOrderDetail } from '../api/order'

export const getAllOrder = createAsyncThunk(
    "order/getAllOrder",
    async () => {
        const {data} = await getAllOrderProducts()
        return data
    }
)

export const orderDetail = createAsyncThunk(
    "order/orderDetail",
    async (id) => {
        const {data} = await getOrderDetail(id)
        return data
    }
)

const orderSlice = createSlice({
    name: "order",
    initialState: {
        value: []
    },
    extraReducers: (builder) => {
        builder.addCase(getAllOrder.fulfilled, (state, action) => {
            state.value = action.payload
        })

        builder.addCase(orderDetail.fulfilled, (state, action) => {
            state.value = action.payload
        })

    }
})

export default orderSlice.reducer