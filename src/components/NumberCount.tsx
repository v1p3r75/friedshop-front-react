import React, { FC, SyntheticEvent, useEffect, useState } from 'react'
import { ProductType } from './ProductCart';
import { cartKeyName, setQuantity } from '../Utils/Generals';

type OptionsType = {
    product: ProductType,
    initialValue? : number,
    step? : number;
    min? : number,
    max? : number
} 

const NumberCount = ({product, initialValue = 1, step = 1, min, max } : OptionsType) => {
    
    let [count, setCount] = useState(initialValue);

    const increment = () => {
        setCount((state) =>  {
            if (max && count >= max) return count;
            return state + step
        });
        
        let quantity = count + 1;
        setQuantity(product, cartKeyName, quantity);
    }

    const decrement = () => {
        
        setCount((state) => {
            if (min && count <= min) return count;
            return state - step;
        });
        let quantity = count - 1;
        setQuantity(product, cartKeyName, quantity);

    }

    return (
        <div className="d-flex">
            <div className='fd-bg-primary py-1 px-3 text-white cursor-pointer rounded-3' onClick={decrement}><i className="bi" style={{lineHeight : "40px"}}>-</i></div>
            <div className='bg-white px-4'><span style={{lineHeight : "40px"}}>{count}</span></div>
            <div className='fd-bg-primary py-1 px-3 text-white cursor-pointer rounded-3' onClick={increment}><i className="bi bi-plus" style={{lineHeight : "40px"}}></i></div>
        </div>
    )

}



export default NumberCount