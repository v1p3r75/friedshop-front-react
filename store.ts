import { configureStore } from "@reduxjs/toolkit";
import { productCartSlice, productWhishListSlice } from "./src/store/productSlice";

export const store = configureStore({
    reducer : {
        productWishlist : productWhishListSlice.reducer,
        productCart : productCartSlice.reducer
    }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch