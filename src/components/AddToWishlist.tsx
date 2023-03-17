import React, { useState } from 'react'
import { ProductType } from './ProductCart'
import { getItem, productIsExist, wishlistKeyName } from '../Utils/Generals';
import addProductToCart from '../Utils/addProductToCart';

const AddToWishlist = ( {product, classSup = '', supStyle} : {product : ProductType, classSup? : string, supStyle? : Object}) => {

    const [added, setAdded] = useState(false);
    const exist = productIsExist(product.name, wishlistKeyName)

  return <>
        <a className={"fd-btn cursor-pointer " + classSup } style={supStyle}>
            {
                 exist && exist.length > 0 ? 
                    <i className='bi bi-check-circle'></i>
                :
                    <i className={"bi bi-heart"} onClick={(e) => {
                        e.preventDefault();
                        addProductToCart(product, wishlistKeyName);
                        setAdded(true);
                        }}>
                    </i>
            }
        </a>
  </>
}

export default AddToWishlist