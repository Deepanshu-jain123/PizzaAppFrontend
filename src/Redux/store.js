import { configureStore } from "@reduxjs/toolkit";
import AuthSliceReducer from "./Slices/AuthSlice";
import CartSliceReducer from "./Slices/CartSlice";
// import { getProducts } from "../../../pizza app/src/controllers/productController";
// import ProductSliceReducer from "./Slices/ProductSlice";
import ProductSliceReducer from "./Slices/ProductSlices"
import OrderSliceReducer from "./Slices/OrderSlice"
export const store = configureStore({
    reducer: {
        auth: AuthSliceReducer,
        product: ProductSliceReducer,
        cart: CartSliceReducer,
        order: OrderSliceReducer
    },
    devTools: true,
    middleware: getDefaultMiddleware => 
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});
