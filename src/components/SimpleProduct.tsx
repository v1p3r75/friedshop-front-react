import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ProductType } from './ProductCart'
import { defaultMethod } from 'react-router-dom/dist/dom'
import { cartKeyName, deleteProduct } from '../Utils/Generals'
import { deleteProductInCart } from '../store/productSlice'
import { useDispatch } from 'react-redux'


const SimpleProduct = ({product} : {product : ProductType}) => {

    const dispatch = useDispatch();


  return (
    <div className="d-flex w-100 gap-3 h-25 mb-3 bg-white">
            <div className="w-25 border-1 border fd-hover-border-primary">
                <img src={product.img} alt={product.name} className="w-100 h-100"/>
            </div>
            <div className="w-75">
                <span className="product-name my-2 fw-bold text-dark">{product.name}</span>
                <div className='d-flex justify-content-between'>
                    <div className="d-flex mt-2 gap-2">
                        <span className="fd-color-primary fw-bold me-1">{product.price}</span>
                        <span><i className="bi bi-x"></i></span>
                        <span>{product.quantity ?? 1}</span>
                    </div>
                    <div className="close-btn me-4 fd-bg-primary text-white text-center rounded-5 cursor-pointer" style={{width : '30px', height: '30px'}}
                      onClick={() => dispatch(deleteProductInCart(product))}
                      >
                        <span><i className="bi bi-x" style={{lineHeight: '30px'}}></i></span>
                    </div>
                </div>
            </div>
    </div>  
  )
}

export default SimpleProduct