import React from 'react'
import { ProductType } from './ProductCart'

const AddToWishlist = ( {product, classSup = '', supStyle} : {product : ProductType, classSup? : string, supStyle? : Object}) => {

  return <>
        <a href="#" className={"fd-btn " + classSup} style={supStyle}><i className="bi bi-heart"></i></a>
  </>
}

export default AddToWishlist