import React, { FC } from 'react'

type ProductType = {
    img : string,
    reviews: number,
    name: string,
    price: number,
    oldPrice: number,
    reduction?: string,
};

const ProductCart = (props : ProductType) => {
    
  
    return (
        <div className="position-relative bg-white w-20 mt-4" style={{height: "400px"}}>
            <div className="h-75">
                <img src={props.img} alt={props.name} className="h-100"/>
            </div>
           { !props.reduction ? <a className="position-absolute top-0 start-0 fd-btn" style={{padding: '5px 20px'}}>SALE</a> : 
            <a className="position-absolute top-0 start-0 fd-btn-red" style={{padding: '5px 20px'}}> {props.reduction} </a>
           }
           <a className="position-absolute fd-btn rounded-5" style={{padding: '5px 10px', top: '10px', right: '10px'}}> <i className="bi bi-heart"></i></a>
           <div className="products-reviews d-flex justify-content-center gap-2">
            <i className="bi bi-star"></i><i className="bi bi-star"></i><i className="bi bi-star"></i><i className="bi bi-star"></i><i className="bi bi-star"></i>
           </div>
           <h5 className="product-name my-2 text-center">{props.name}</h5>
           <div className="d-flex justify-content-center">
            <h5 className="fd-color-primary">${props.price}</h5>
            <h6 className="align-self-end" style={{textDecoration : "line-through"}}>${props.oldPrice}</h6>
           </div>
        </div>
    )

}



export default ProductCart