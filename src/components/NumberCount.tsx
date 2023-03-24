import React, { FC, SyntheticEvent, useEffect, useState } from 'react'
import { ProductType } from './ProductCart';
import { cartKeyName } from '../Utils/Generals';
import { setProductQuantity } from '../store/productSlice';
import { useAppDispatch } from '../hooks/redux-hooks';

type OptionsType = {
    product: ProductType,
    initialValue? : number,
    step? : number;
    min? : number,
    max? : number
} 

const Numberquantity = ({product, initialValue = 1, step = 1, min, max } : OptionsType) => {
    
    const [quantity, setQuantity] = useState(product.quantity ?? initialValue);
    const dispatch = useAppDispatch();

    const increment = () => {
        if (max && quantity >= max) {
            return quantity;
        }
        setQuantity(state => state + step);
        const quantitySaved = quantity + 1;
        dispatch(setProductQuantity({product, quantitySaved}));
    }

    const decrement = () => {
        
        if (min && quantity <= min) {
            return quantity;
        }
        setQuantity(state => state - step);
        const quantitySaved = quantity - 1;
        dispatch(setProductQuantity({product, quantitySaved}));
    }

    return (
        <div className="d-flex">
            <div className='fd-bg-primary py-1 px-3 text-white cursor-pointer rounded-3' onClick={decrement}><i className="bi" style={{lineHeight : "40px"}}>-</i></div>
            <div className='bg-white px-4'><span style={{lineHeight : "40px"}}>{quantity}</span></div>
            <div className='fd-bg-primary py-1 px-3 text-white cursor-pointer rounded-3' onClick={increment}><i className="bi bi-plus" style={{lineHeight : "40px"}}></i></div>
        </div>
    )

}



export default Numberquantity