import React, { FC, ReducerState, useEffect, useState } from 'react'
import Footer from './includes/Footer';
import Header from './includes/Header';
import Banner from '../components/Banner';
import { productsTest } from './VirtualData';
import AddToCart from '../components/AddToCart';
import { getItem,link,wishlistKeyName } from '../Utils/Generals';
import { ProductType } from '../components/ProductCart';
import { useSelector } from 'react-redux';
import { deleteProductInWishlist } from '../store/productSlice';
import { useDispatch } from 'react-redux';
import { useAppDispatch, useAppSelector } from '../hooks/redux-hooks';


const WishList: FC = () => {

    const dispatch = useAppDispatch();

    let wishlist : Array<ProductType> = useAppSelector((state) => state.productWishlist);

    return (
        <>
            <Header />
            <Banner page='Wishlist' path={['Home', 'Wishlist']} />
            <div className="wishlist-view my-5 px-3 px-lg-5">
                <div className="table-responsive">
                    <table className="table table-default text-center table-bordered">
                        <thead>
                            <tr className='fd-bg-primary text-white'>
                                <th scope="col" className='p-3'>IMAGE</th>
                                <th scope="col" className='p-3'>PRODUCT NAME</th>
                                <th scope="col" className='p-3'>PRICE</th>
                                <th scope="col" className='p-3'>STOCK STATUS</th>
                                <th scope="col" className='p-3'>ADD TO CART</th>
                                <th scope="col" className='p-3'>ACTION</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                wishlist && wishlist.length > 0 ?
                                    wishlist.map((product) => {
                                        return <tr className="p-3" key={product.id}>
                                            <td scope="row w-25"><img src={link(product.img)} alt={product.name} style={{ width: '50px', height: '50px' }} /></td>
                                            <td className='fw-bold'>{product.name}</td>
                                            <td>{product.price}</td>
                                            <td>{"In Stock"}</td>
                                            <td><AddToCart product={product} classSup='w-75 mx-auto' /></td>
                                            <td className='fw-bold cursor-pointer'><i className="bi bi-x" style={{ lineHeight: '50px' }} 
                                                onClick={() => dispatch(deleteProductInWishlist(product))}
                                                ></i></td>
                                        </tr>
                                    }) :
                                    <tr className='p-5'>
                                        <td className='fw-bold text-center' colSpan={6}>You have not a product in whilist</td>
                                    </tr>
                            }
                        </tbody>
                    </table>
                </div>

            </div>
            <Footer />
        </>
    )
}

export default WishList