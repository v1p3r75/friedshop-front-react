import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { ProductType } from '../../components/ProductCart';

// export const BASE_URL = 'https://friedshop-back-laravel.dev/api/';
export const BASE_URL = 'https://comfortable.dev/';

export const productApiSice = createApi({
    reducerPath : 'api/products',
    baseQuery : fetchBaseQuery({baseUrl : BASE_URL}),
    tagTypes : ['product'],
    endpoints : (builder) => ({
        getAllProducts : builder.query(({
            query : () => '/user/1',
        })),
        getProduct : builder.query({
            query : (product : ProductType) => `product/${product.id}`,
        }),
        // createProduct: builder.mutation({
        //     query : (product : ProductType) => `product/create`,
        //     METHOD : 'POST',
        //     body : product,
        // })
    })
})


export const { useGetAllProductsQuery } = productApiSice;
