import React, { FC, SyntheticEvent, useState } from 'react'

type OptionsType = {
    initialValue? : number;
    step? : number;
    min? : number,
    max? : number
} 

const NumberCount = ({initialValue = 1, step = 1, min, max } : OptionsType) => {
    
    const [count, setCount] = useState(initialValue);
    
    const increment = () => {
        setCount((state) =>  {
            if (max && state >= max) return state;
            return state + step
        });
    }

    const decrement = () => {
        setCount((state) => {
            if (min && state <= min) return state;
            return state - step;
        });
    }

    return (
        <div className="d-flex">
            <div className='fd-bg-primary py-1 px-3 text-white cursor-pointer' onClick={decrement}><i className="bi" style={{lineHeight : "40px"}}>-</i></div>
            <div className='bg-white px-4'><span style={{lineHeight : "40px"}}>{count}</span></div>
            <div className='fd-bg-primary py-1 px-3 text-white cursor-pointer' onClick={increment}><i className="bi bi-plus" style={{lineHeight : "40px"}}></i></div>
        </div>
    )

}



export default NumberCount