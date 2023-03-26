import React from 'react'
import { InfinitySpin } from 'react-loader-spinner'

const Spinner = () => {
  return (
    <div className='spinner w-25' title='Fetching Products'></div>
    // <InfinitySpin width='150' color='#fff'/>
  )
}

export default Spinner