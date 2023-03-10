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

const ProductCart = (props : ProductType) => {
    
  
    return (
        <div className="position-relative bg-white mt-4 border-1 border fd-hover-border-primary product-cart" style={{height: "400px"}}>
            <div className="position-relative h-75 product-img">
                <img src={props.img} alt={props.name} className="h-100"/>
                <div className='show d-none position-absolute w-100 animate__animated animate__fadeIn' style={{bottom : '10%'}}><Link to={"/"} className='bg-white fd-color-primary fd-hover-bg-primary d-block w-50 mx-auto px-3 py-2'>ADD TO CART</Link></div>
            </div>
           { !props.reduction ? <a className="position-absolute top-0 start-0 fd-btn" style={{padding: '5px 20px'}}>SALE</a> : 
            <a className="position-absolute top-0 start-0 fd-btn-red" style={{padding: '5px 20px'}}> {props.reduction} </a>
           }
           <Link to={"/"} className="position-absolute fd-btn rounded-5" style={{padding: '5px 10px', top: '10%', right: '10%'}}> <i className="bi bi-heart"></i></Link>
           <Link to={"/"} className="show position-absolute fd-btn rounded-5 d-none animate__animated animate__fadeInRight" style={{padding: '5px 10px', top: '20%', right: '10%'}}> <i className="bi bi-eye"></i></Link>
           <div className='text-center'>
                <Link to={"/product/1"} className="product-name my-2 fw-bold text-dark">{props.name}</Link>
            </div>
           <div className='d-flex justify-content-center'>
               <Reviews rating={props.reviews}/>
            </div>
           <div className="d-flex justify-content-center">
            <h5 className="fd-color-primary">${props.price}</h5>
            <h6 className="align-self-end" style={{textDecoration : "line-through"}}>${props.oldPrice}</h6>
           </div>
        </div>
    )

}



export default ProductCart