import { PayloadAction, createSlice } from "@reduxjs/toolkit";


export const userSlice = createSlice({
    
    name : 'user',

    initialState : {},

    reducers : {

        setUser : (state, action) => {

            state = action.payload;

            return state;
        },
    }

})

export const { setUser } = userSlice.actions;