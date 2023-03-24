import React, { useState } from 'react'
import { ProductType } from './ProductCart'
import addProductToCart from '../Utils/addProductToCart';
import { cartKeyName, productIsExist } from '../Utils/Generals';
import { useDispatch, useSelector } from 'react-redux';
import { addToShoppingCart } from '../store/productSlice';

const AddToCart = ({ product, classSup = '', divClass = '' }: { product: ProductType, classSup?: string, divClass?: string }) => {

  const dispatch = useDispatch();
  const exist : ProductType[] = useSelector(state => state.productCart);
  const isExistInCart = exist.find((stateProduct) => stateProduct.id == product.id);

  return <>
    {
      isExistInCart ?
        <div className={divClass}><span className={"fd-btn rounded-3 text-center " + classSup}><i className='bi bi-check-circle'></i></span></div>
        :
        <div className={divClass} onClick={(e) => dispatch(addToShoppingCart(product))}><a href="#" className={"fd-btn rounded-3 text-center " + classSup}>ADD TO CART</a></div>
    }
  </>
}

export default AddToCart