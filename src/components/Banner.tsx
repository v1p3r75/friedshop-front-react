import React from 'react'

const Banner = ({page, path} : {page : string, path : string[]}) => {

  return (
    <div className='d-flex flex-wrap justify-content-between p-5 align-items-center' style={{ height : '200px', backgroundImage : "url('/img/breadcrumb.jpg')", backgroundSize: "cover"}}>
        <h2 className='fw-bold mb-4 mb-lg-0'>{page}</h2>
        <h5 className='fw-bold'>{path.join(" > ")}</h5>
    </div>
  )

}

export default Banner;