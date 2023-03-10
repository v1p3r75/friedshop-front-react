import React, { FC } from 'react'
import DateCount from './DateCount';
import NumberCount from './NumberCount';
import Reviews from './Reviews';
import { Link } from 'react-router-dom';

type ProductType = {
    img: string,
    reviews: number,
    name: string,
    price: number,
    oldPrice: number,
    reduction?: string,
    description: string,
};

const ProductOfDay = (props: ProductType) => {


    return (
        <div className="d-flex gap-3">
            <div className="w-25">
                <Link to={"/product/1"}>
                    <img src={props.img} alt={props.name} className="w-100 h-100" />
                </Link>
            </div>
            <div className="w-75">
                <DateCount />
                <Link to={"/product/1"} className="product-name my-2 fw-bold text-dark">{props.name}</Link>
                <div className="d-flex gap-1 mt-2">
                    <h3 className="fd-color-primary fw-bold">${props.price}</h3>
                    <h6 className="align-self-end" style={{ textDecoration: "line-through" }}>${props.oldPrice}</h6>
                </div>
                <div className="my-3 d-flex gap-2"><Reviews rating={props.reviews} /><span className='fd-color-primary'>(25 Reviews)</span></div>
                <div className="product-desc fw-bold opacity-75">
                    <p>{props.description}</p>
                </div>
                <div className='d-flex gap-2'>
                    <NumberCount min={1} />
                    <a href="#" className="fd-btn w-auto"><i className="bi bi-cart3"></i>ADD TO CART</a>
                </div>
            </div>
        </div>
    )

}



export default ProductOfDay