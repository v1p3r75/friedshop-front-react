import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { productsTest } from '../views/VitualData';
import SimpleProduct from './SimpleProduct';

const ViewCart = ({setShow} : {setShow : Function}) => {
    
    const hideCart = () => { 
        setShow(false);
        document.body.classList.remove('overflow-hidden');
    }

    useEffect(() => {
        document.body.classList.add('overflow-hidden');
    }, []);


    return (
        <>
            <div className="position-absolute w-100 h-100 top-0 start-0" style={{zIndex : '1', backgroundColor: 'rgba(0,0,0,0.75)'}}></div>
            <div className='position-absolute d-flex flex-column justify-content-between gap-2 fw-bold top-0 end-0 w-25 p-3 bg-white h-100 text-black' style={{zIndex : '2'}}>
                <h4 className="fw-bold w-100">SHOPPING CART <span className="float-end cursor-pointer" onClick={hideCart}>x</span></h4><hr />
                <div className="h-50 overflow-auto">
                    {productsTest.map(product => <SimpleProduct {...product} key={product.img} />)}
                </div><hr />
                <div className="h-25 mb-5">
                    <h5 className='w-100 fw-bold'>Sub Total : <span className="float-end">$450</span></h5>
                    <div className="v-cart my-3" onClick={hideCart}><Link to={"/cart"} className="fd-btn bg-white border border-1 text-black p-4 text-center">VIEW CART</Link></div>
                    <div className="v-checkout" onClick={hideCart}><Link to={"/checkout"} className="fd-btn p-4 text-center">CHECKOUT</Link></div>
                </div>
            </div>
        </>
  )
}

export default ViewCart