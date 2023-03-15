import React, { useState } from 'react'
import { ProductType } from './ProductCart'
import addProductToCart from '../Utils/addProductToCart';
import { productIsExist } from '../Utils/Generals';

const AddToCart = ({ product, classSup = '', divClass = '' }: { product: ProductType, classSup?: string, divClass?: string }) => {

  const [added, setAdded] = useState(false);
  const exist = productIsExist(product.name, 'fd_shoppingcart')

  return <>
    {
      exist.length > 0 ?
        <div className={divClass}><span className={"fd-btn rounded-3 text-center " + classSup}><i className='bi bi-check-circle'></i></span></div>
        :
        <div className={divClass} onClick={(e) => {
          e.preventDefault();
          addProductToCart(product, 'fd_shoppingcart');
          setAdded(true)
        }}><a href="#" className={"fd-btn rounded-3 text-center " + classSup}>ADD TO CART</a></div>
    }
  </>
}

export default AddToCart