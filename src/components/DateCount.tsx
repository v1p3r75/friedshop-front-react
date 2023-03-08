import React, { FC, SyntheticEvent, useState } from 'react'

type OptionsType = {
    initialValue? : number;
    step? : number;
    min? : number,
    max? : number
} 

const DateCount = () => {
    
    const [date, setDate] = useState<Date>(new Date());
    
    return (
        <div className="d-flex gap-2 text-center my-3">
            <div className='fd-bg-primary py-1 px-3 bg-black fw-bold'><span className='text-white'>-84</span><br /><span className='fd-color-primary'>DAYS</span></div>
            <div className='fd-bg-primary py-1 px-3 bg-black fw-bold'><span className='text-white'>-07</span><br /><span className='fd-color-primary'>HOURS</span></div>
            <div className='fd-bg-primary py-1 px-3 bg-black fw-bold'><span className='text-white'>-14</span><br /><span className='fd-color-primary'>MINUTES</span></div>
            <div className='fd-bg-primary py-1 px-3 bg-black fw-bold'><span className='text-white'>-10</span><br /><span className='fd-color-primary'>SEC</span></div>
        </div>
    )

}



export default DateCount