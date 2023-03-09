import React, { FC } from 'react'
import DateCount from './DateCount';
import NumberCount from './NumberCount';
import Reviews from './Reviews';

type ProductType = {
    img : string,
    reviews: number,
    name: string,
    price: number,
    oldPrice: number,
    reduction?: string,
    description: string,
};

const ProductOfDay = (props : ProductType) => {
    
  
    return (
        <div className="d-flex gap-3">
            <div className="w-25">
                <img src={props.img} alt={props.name} className="w-100 h-100"/>
            </div>
            <div className="w-75">
                <DateCount />
                <h5 className="product-name my-2">{props.name}</h5>
                <div className="d-flex gap-1">
                    <h3 className="fd-color-primary fw-bold">${props.price}</h3>
                    <h6 className="align-self-end" style={{textDecoration : "line-through"}}>${props.oldPrice}</h6>
                </div>
                <Reviews rating={props.reviews}/>
                <div className="product-desc">
                    <p>{props.description}</p>
                </div>
                <div className='d-flex gap-2'>
                    <NumberCount min={0}/>
                    <a href="#" className="fd-btn w-auto"><i className="bi bi-cart3"></i>ADD TO CART</a>
                </div>
            </div>
        </div>
    )

}



export default ProductOfDay