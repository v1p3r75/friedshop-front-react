import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { BASE_URL } from '../../Utils/Generals';

export const commandApiSlice = createApi({
    
    reducerPath : 'api/commands',
    baseQuery : fetchBaseQuery({baseUrl : BASE_URL}),
    tagTypes : ['Commands'],

    endpoints : (builder) => ({

        getAllCommands : builder.query(({
            query : () => '/command',
            providesTags : ['Commands']
        })),

        getCommand : builder.query({
            query : (id) => `/command/${id}`,
            providesTags : ['Commands']
        }),

        createCommand: builder.mutation({
            query : (command) => ({
                url : `/command/create`,
                method : 'POST',
                body : command,
            }),
           invalidatesTags : ['Commands']
        }),

        updateCommand: builder.mutation({
            query : (data) => ({
                url : 'command/edit',
                method : 'POST',
                body : data,
            }),
            invalidatesTags : ['Commands']
        }),

        deleteCommand: builder.mutation({
            query : (id : number) => ({
                url : '/command/delete',
                method : 'DELETE',
                body : {id}
            }),
            invalidatesTags : ['Commands']
        })
    })
})


export const {
    useGetAllCommandsQuery,
    useGetCommandQuery,
    useUpdateCommandMutation,
    useCreateCommandMutation,
    useDeleteCommandMutation,
 } = commandApiSlice;
