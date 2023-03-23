import { createSlice } from "@reduxjs/toolkit";
import { cartKeyName, getItem, setItem, wishlistKeyName } from "../Utils/Generals";
import { ProductType } from "../components/ProductCart";


export const productWhishListSlice = createSlice({
    name : 'wishlist',

    initialState : Array<ProductType>,

    reducers : {

        fillWishList : (state, action) => {

            state = typeof action.payload === 'string' ? JSON.parse(action.payload) : action.payload;

            return state;
        },

        addToWishlist : (state, action) => {

            const getProducts = getItem(wishlistKeyName);

            if (getProducts) {
                const oldProducts = JSON.parse(getProducts);
                const newProducts : ProductType[] = [...oldProducts, action.payload];

                setItem(wishlistKeyName, newProducts);
                state = newProducts;
                return state;
            }
            state = [action.payload];

            setItem(wishlistKeyName, [action.payload]); 

            return state;
        }
    }

});

export const { fillWishList, addToWishlist } = productWhishListSlice.actions;