import React from 'react'
import { ProductType } from './ProductCart'
import { getItem, setItem } from '../Utils/Generals'

const AddToCart = ( {product, classSup = '', divClass = ''} : {product : ProductType, classSup? : string, divClass? : string} ) => {

  const addProductToCart = (product : ProductType) => {

    const keyName = 'product_list';

    const getProducts = getItem(keyName);

    if (getProducts) {
      
      const oldProducts = JSON.parse(getProducts);
      const products : ProductType[] = [...oldProducts, product];

      return setItem(keyName, products)

    }

    return setItem(keyName, [{...product}]);

  }

  return <>
        <div className={divClass} onClick={(e) => {
          e.preventDefault();
          addProductToCart(product);
        }}><a href="#" className={"fd-btn rounded-3 text-center " + classSup}>ADD TO CART</a></div>
  </>
}

export default AddToCart