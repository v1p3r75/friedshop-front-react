import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { getItem, removeItem } from "../Utils/Generals";
import RoutePaths from "../config";


export const userSlice = createSlice({
    
    name : 'user',

    initialState : {},

    reducers : {

        setUser : (state, action) => {

            state = action.payload;

            return state;
        },

        logoutCurrentUser : (state, action) => {

            state = {};
            console.log('hello')
            return state;
        },
    }

})

export const { setUser, logoutCurrentUser } = userSlice.actions;