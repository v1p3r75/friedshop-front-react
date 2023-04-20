import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { BASE_URL } from '../../Utils/Generals';

export const slideApiSlice = createApi({
    
    reducerPath : 'api/slides',
    baseQuery : fetchBaseQuery({baseUrl : BASE_URL}),
    tagTypes : ['Slides'],

    endpoints : (builder) => ({

        getAllSlides : builder.query(({
            query : () => '/slide',
            providesTags : ['Slides']
        })),

        getSlide : builder.query({
            query : (slide) => `/slide/${slide.id}`,
            providesTags : ['Slides']
        }),

        createSlide: builder.mutation({
            query : (slide) => ({
                url : `/slide/create`,
                method : 'POST',
                body : slide,
            }),
           invalidatesTags : ['Slides']
        }),

        updateSlide: builder.mutation({
            query : (data) => ({
                url : 'slide/edit',
                method : 'POST',
                body : data,
            }),
            invalidatesTags : ['Slides']
        }),

        deleteSlide: builder.mutation({
            query : (id : number) => ({
                url : '/slide/delete',
                method : 'DELETE',
                body : {id}
            }),
            invalidatesTags : ['Slides']
        })
    })
})


export const {
    useGetAllSlidesQuery,
    useGetSlideQuery,
    useUpdateSlideMutation,
    useCreateSlideMutation,
    useDeleteSlideMutation,
 } = slideApiSlice;
