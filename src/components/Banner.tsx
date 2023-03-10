import React from 'react'

const Banner = ({page, path} : {page : string, path : string[]}) => {

  return (
    <div className='d-flex justify-content-between p-5 align-items-center' style={{ height : '200px', backgroundImage : "url('/src/assets/img/breadcrumb.jpg')", backgroundSize: "cover"}}>
        <h2 className='fw-bold'>{page}</h2>
        <h5 className='fw-bold'>{path.join(" > ")}</h5>
    </div>
  )

}

export default Banner;