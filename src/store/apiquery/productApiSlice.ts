import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { ProductType } from '../../components/ProductCart';
import { BASE_URL } from '../../Utils/Generals';

export const productApiSice = createApi({
    
    reducerPath : 'api/products',
    baseQuery : fetchBaseQuery({baseUrl : BASE_URL}),
    tagTypes : ['product'],
    endpoints : (builder) => ({

        getAllProducts : builder.query(({
            query : () => '/product',
        })),

        getProduct : builder.query({
            query : (product : ProductType) => `/product/${product.id}`,
        }),

        createProduct: builder.mutation({
            query : (product) => ({
                url : `/product/create`,
                method : 'POST',
                body : product,
            }),
           invalidatesTags : ['product'],
        })
    })
})


export const {
    useGetAllProductsQuery,
    useGetProductQuery,
    useCreateProductMutation,
 } = productApiSice;
