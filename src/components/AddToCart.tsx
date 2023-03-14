import React from 'react'
import { ProductType } from './ProductCart'

const AddToCart = ( {product, classSup = '', divClass = ''} : {product : ProductType, classSup? : string, divClass? : string} ) => {

  return <>
        <div className={divClass}><a href="#" className={"fd-btn rounded-3 text-center " + classSup}>ADD TO CART</a></div>
  </>
}

export default AddToCart