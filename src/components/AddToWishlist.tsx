import React from 'react'
import { ProductType } from './ProductCart'
import { addToWishlist } from '../store/productSlice';
import { useAppDispatch, useAppSelector } from '../hooks/redux-hooks';

const AddToWishlist = ({ product, classSup = '', supStyle }: { product: ProductType, classSup?: string, supStyle?: Object }) => {


  const dispatch = useAppDispatch();
  const exist : ProductType[] = useAppSelector((state) => state.productWishlist);
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