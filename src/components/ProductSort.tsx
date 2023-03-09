import React, { FC } from 'react'

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
            <div className="w-25">
                <img src={props.img} alt={props.name} className="w-100 h-100"/>
            </div>
            <div className="w-75">
                <span className="product-name my-2 fw-bold opacity-75">{props.name}</span>
                <div className="products-reviews d-flex gap-2">
                    <i className="bi bi-star"></i><i className="bi bi-star"></i><i className="bi bi-star"></i><i className="bi bi-star"></i><i className="bi bi-star"></i>
                </div>
                <div className="d-flex">
                    <span className="fd-color-primary fw-bold me-1">${props.price}</span>
                    <span className="align-self-end" style={{textDecoration : "line-through"}}>${props.oldPrice}</span>
                </div>
            </div>
        </div>  
    )

}



export default ProductSort