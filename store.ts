import { configureStore } from "@reduxjs/toolkit";
import { productCartSlice, productWhishListSlice } from "./src/store/productSlice";
import { productApiSice } from "./src/store/apiquery/productApiSlice";

export const store = configureStore({
    reducer : {
        [productApiSice.reducerPath] : productApiSice.reducer,
        productWishlist : productWhishListSlice.reducer,
        productCart : productCartSlice.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(productApiSice.middleware),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch