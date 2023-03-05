import React, { FC } from 'react'

type ProductType = {
    img : string,
    reviews: number,
    name: string,
    price: number,
    oldPrice: number
};

const ProductCart = (props : ProductType) => {
    
  
    return (
        <div>{props.name}</div>
    )

}



export default ProductCart