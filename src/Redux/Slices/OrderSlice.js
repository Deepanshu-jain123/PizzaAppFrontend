import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import toast from "react-hot-toast";
import axiosInstance from "../../Helpers/axiosInstance";

const initialState = {
    ordersData: null
}

export const placeOrder = createAsyncThunk('/order/placeOrder', async() =>{
     try{
        const response = axiosInstance.post(`/orders`);
        toast.promise(response,{
            loading: 'Creating order',
            error: 'Something went cannot create order',
            success: 'order created successfully'
        });
        const apiResponse = await response;
        return apiResponse
    }catch(error){
        console.log(error);
        toast.error('Something went wrong')
    }
})

const OrderSlice = createSlice({
    name: "order",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(placeOrder.fulfilled, (state, action) => {
            state.ordersData = action?.payload?.data;
        });
    }
});

export default OrderSlice.reducer;