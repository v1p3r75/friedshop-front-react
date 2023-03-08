import React, { FC, SyntheticEvent, useState } from 'react'

type OptionsType = {
    initialValue? : number;
    step? : number;
    min? : number,
    max? : number
} 

const NumberCount = ({initialValue = 1, step = 1, min, max} : OptionsType) => {
    
    const [count, setCount] = useState(initialValue);
    
    const increment = (e : SyntheticEvent) => {
        setCount((state) =>  state + step);
    }

    const decrement = (e : SyntheticEvent) => {
        setCount((state) => {
            if (min && state <= min) return min;
            return state - step;
        });
    }

    return (
        <div className="d-flex">
            <div className='fd-bg-primary py-1 px-3 text-white' onClick={decrement}><i className="bi bi-plus" style={{lineHeight : "40px"}}></i></div>
            <div className='bg-white px-4'><span style={{lineHeight : "40px"}}>{count}</span></div>
            <div className='fd-bg-primary py-1 px-3 text-white' onClick={increment}><i className="bi bi-plus" style={{lineHeight : "40px"}}></i></div>
        </div>
    )

}



export default NumberCount