import React, { useState } from 'react'
import { ProductType } from './ProductCart'
import { getItem } from '../Utils/Generals';
import addProductToCart from '../Utils/addProductToCart';

const AddToWishlist = ( {product, classSup = '', supStyle} : {product : ProductType, classSup? : string, supStyle? : Object}) => {

    const [added, setAdded] = useState(false);

  return <>
        <a href="#" className={"fd-btn " + classSup } style={supStyle}><i className="bi bi-heart" onClick={(e) => {
          e.preventDefault();
          addProductToCart(product, 'wishlist');
        }}></i></a>
  </>
}

export default AddToWishlist