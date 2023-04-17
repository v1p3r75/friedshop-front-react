import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { BASE_URL } from '../../Utils/Generals';

export const authApiSlice = createApi({
    
    reducerPath : 'api/auth',
    baseQuery : fetchBaseQuery({baseUrl : BASE_URL}),
    tagTypes : ['Auth'],

    endpoints : (builder) => ({

        refresh : builder.query(({
            query : () => '/user/refresh',
            providesTags : ['Auth']
        })),

        login: builder.mutation({
            query : (category) => ({
                url : `/user/login`,
                method : 'POST',
                body : category,
            }),
           invalidatesTags : ['Auth']
        }),

        register: builder.mutation({
            query : (data) => ({
                url : 'user/create',
                method : 'POST',
                body : data,
            }),
            invalidatesTags : ['Auth']
        })
    })
})


export const {
    useRefreshQuery,
    useLoginMutation,
    useRegisterMutation
 } = authApiSlice;
