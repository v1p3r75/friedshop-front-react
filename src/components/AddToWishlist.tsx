import React, { Dispatch, useState } from 'react'
import { ProductType } from './ProductCart'
import { getItem, productIsExist, wishlistKeyName } from '../Utils/Generals';
import addProductToCart from '../Utils/addProductToCart';
import { addToWishlist } from '../store/productSlice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';

const AddToWishlist = ({ product, classSup = '', supStyle }: { product: ProductType, classSup?: string, supStyle?: Object }) => {


  const dispatch = useDispatch();
  const exist : ProductType[] = useSelector((state : RootState ) => state.productWishlist);
  const isExistInWishlist = exist.find((stateProduct) => stateProduct.id == product.id);

  return <>
    <a className={"fd-btn cursor-pointer " + classSup} style={supStyle}>
      {
        isExistInWishlist ?
          <i className='bi bi-check-circle'></i>
          :
          <i className="bi bi-heart" onClick={(e) => {
            dispatch(addToWishlist(product))
          }}></i>
      }

    </a>
  </>
}

export default AddToWishlist