import React from 'react'
import { InfinitySpin, ThreeDots } from 'react-loader-spinner'

const Spinner = () => {
  return (
    <div className='mt-2 w-25 mx-auto'><ThreeDots /></div>
    // <InfinitySpin width='150' color='#fff'/>
  )
}

export default Spinner