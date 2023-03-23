import { configureStore } from "@reduxjs/toolkit";
import { productWhishListSlice } from "./src/store/productSlice";

export const store = configureStore({
    reducer : {
        productWishlist : productWhishListSlice.reducer
    }
})