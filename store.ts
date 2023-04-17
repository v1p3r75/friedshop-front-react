import { configureStore } from "@reduxjs/toolkit";
import { productCartSlice, productSlice, productWhishListSlice } from "./src/store/productSlice";
import { productApiSlice } from "./src/store/apiquery/productApiSlice";
import { categoryApiSlice } from "./src/store/apiquery/categoryApiSlice";
import { authApiSlice } from "./src/store/apiquery/AuthApiSlice";

export const store = configureStore({
    reducer : {
        [productApiSlice.reducerPath] : productApiSlice.reducer,
        [authApiSlice.reducerPath] : authApiSlice.reducer,
        [categoryApiSlice.reducerPath] : categoryApiSlice.reducer,
        products : productSlice.reducer,
        productWishlist : productWhishListSlice.reducer,
        productCart : productCartSlice.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
        .concat(productApiSlice.middleware,
            categoryApiSlice.middleware,
            authApiSlice.middleware),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch