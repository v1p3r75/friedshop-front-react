import React, { FC } from 'react'
import Reviews from './Reviews';
import { Link } from 'react-router-dom';

type ProductType = {
    img : string,
    reviews: number,
    name: string,
    price: number,
    oldPrice: number,
    reduction?: string,
};

const ProductSort = (props : ProductType) => {
    

    return (
        <div className="d-flex w-100 gap-3 h-25 mb-3 bg-white">
            <div className="w-25 border-1 border fd-hover-border-primary">
                <Link to={"/product/1"}><img src={props.img} alt={props.name} className="w-100 h-100"/></Link>
            </div>
            <div className="w-75">
                <Link to={"/product/1"} className="product-name my-2 fw-bold text-dark">{props.name}</Link>
                <Reviews rating={props.reviews}/>
                <div className="d-flex">
                    <span className="fd-color-primary fw-bold me-1">${props.price}</span>
                    <span className="align-self-end" style={{textDecoration : "line-through"}}>${props.oldPrice}</span>
                </div>
            </div>
        </div>  
    )

}



export default ProductSort