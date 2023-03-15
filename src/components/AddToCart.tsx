import React from 'react'
import { ProductType } from './ProductCart'
import addProductToCart from '../Utils/addProductToCart';

const AddToCart = ( {product, classSup = '', divClass = ''} : {product : ProductType, classSup? : string, divClass? : string} ) => {


  return <>
        <div className={divClass} onClick={(e) => {
          e.preventDefault();
          addProductToCart(product, 'shoppingcart');
        }}><a href="#" className={"fd-btn rounded-3 text-center " + classSup}>ADD TO CART</a></div>
  </>
}

export default AddToCart