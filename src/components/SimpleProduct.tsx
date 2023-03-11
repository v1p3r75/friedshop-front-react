import React from 'react'
import { Link } from 'react-router-dom'

type ProductType = {
    img : string,
    reviews: number,
    name: string,
    price: number,
    oldPrice: number,
    reduction?: string,
};

const SimpleProduct = (props : ProductType) => {


  return (
    <div className="d-flex w-100 gap-3 h-25 mb-3 bg-white">
            <div className="w-25 border-1 border fd-hover-border-primary">
                <Link to={"/product/1"}><img src={props.img} alt={props.name} className="w-100 h-100"/></Link>
            </div>
            <div className="w-75">
                <Link to={"/product/1"} className="product-name my-2 fw-bold text-dark">{props.name}</Link>
                <div className='d-flex justify-content-between'>
                    <div className="d-flex mt-2 gap-2">
                        <span className="fd-color-primary fw-bold me-1">{'$50'}</span>
                        <span>x</span>
                        <span>{3}</span>
                    </div>
                    <div className="close-btn me-4 fd-bg-primary text-white text-center rounded-5 cursor-pointer" style={{width : '30px', height: '30px'}}>
                        <span>x</span>
                    </div>
                </div>
            </div>
    </div>  
  )
}

export default SimpleProduct