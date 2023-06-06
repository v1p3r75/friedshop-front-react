import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { productsTest } from '../views/VirtualData';
import SimpleProduct from './SimpleProduct';
import RoutePaths from '../config';
import { ProductType } from './ProductCart';
import { cartKeyName, getItem, getTotal } from '../Utils/Generals';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { useAppSelector } from '../hooks/redux-hooks';

const ViewCart = ({setShow} : {setShow : Function}) => {

    const productCart = useAppSelector((state) => state.productCart);
    
    const hideCart = () => { 
        setShow(false);
        document.body.classList.remove('overflow-hidden');
    }

    useEffect(() => {
        
        document.body.classList.add('overflow-hidden');

        return () => {
            document.body.classList.remove('overflow-hidden');
        };
    }, []);


    return (
        <>
            <div className="position-fixed w-100 h-100 top-0 start-0 end-0" style={{zIndex : 2000, backgroundColor: 'rgba(0,0,0,0.75)'}}></div>
            <div className='position-fixed d-flex flex-column justify-content-between gap-2 fw-bold top-0 end-0 col-12 col-lg-3 p-3 bg-white h-100 text-black' style={{zIndex : 2500}}>
                <h4 className="fw-bold w-100">SHOPPING CART <span className="float-end cursor-pointer" onClick={hideCart}><i className="bi bi-x"></i></span></h4><hr />
                <div className="h-50 overflow-auto">
                    { productCart && productCart.length > 0 ?
                        productCart.map(product => <SimpleProduct product = {product} key={product.id} />) :
                        <h6 className="opacity-50 text-center">No Product in Cart.</h6>
                    }
                </div><hr />
                <div className="h-25 mb-5">
                    <h5 className='w-100 fw-bold'>Sub Total : <span className="float-end">{'$' + getTotal()}</span></h5>
                    <div className="v-cart my-3" onClick={hideCart}><Link to={RoutePaths.cart} className="fd-btn bg-white border border-1 text-black p-4 text-center">VIEW CART</Link></div>
                    <div className="v-checkout" onClick={hideCart}><Link to={RoutePaths.checkout} className="fd-btn p-4 text-center">CHECKOUT</Link></div>
                </div>
            </div>
        </>
  )
}

export default ViewCart