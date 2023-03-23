import React, { useState } from 'react'
import { ProductType } from './ProductCart'
import { getItem, productIsExist, wishlistKeyName } from '../Utils/Generals';
import addProductToCart from '../Utils/addProductToCart';
import { addToWishlist } from '../store/productSlice';
import { useDispatch } from 'react-redux';

const AddToWishlist = ( {product, classSup = '', supStyle} : {product : ProductType, classSup? : string, supStyle? : Object}) => {

    // const exist = productIsExist(product.name, wishlistKeyName);

    const dispatch = useDispatch();

  return <>
        <a className={"fd-btn cursor-pointer " + classSup } style={supStyle}>
            {/* {
                 exist && exist.length > 0 ? 
                    <i className='bi bi-check-circle'></i>
                :
                    
            } */}
            <i className={"bi bi-heart"} onClick={() => dispatch(addToWishlist(product))}>
                    </i>
        </a>
  </>
}

export default AddToWishlist