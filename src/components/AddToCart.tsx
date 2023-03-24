import React, { useState } from 'react'
import { ProductType } from './ProductCart'
import addProductToCart from '../Utils/addProductToCart';
import { cartKeyName,  } from '../Utils/Generals';
import { addToShoppingCart } from '../store/productSlice';
import { RootState } from '../../store';
import { useAppDispatch, useAppSelector } from '../hooks/redux-hooks';

const AddToCart = ({ product, classSup = '', divClass = '' }: { product: ProductType, classSup?: string, divClass?: string }) => {

  const dispatch = useAppDispatch();
  const exist : ProductType[] = useAppSelector((state) => state.productCart);
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