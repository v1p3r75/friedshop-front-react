import { configureStore } from "@reduxjs/toolkit";
import { productCartSlice, productWhishListSlice } from "./src/store/productSlice";

export const store = configureStore({
    reducer : {
        productWishlist : productWhishListSlice.reducer,
        productCart : productCartSlice.reducer
    }
})