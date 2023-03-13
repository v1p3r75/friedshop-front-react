import React from 'react'
import Header from './includes/Header'
import Banner from '../components/Banner'
import Footer from './includes/Footer'
import { productsTest } from './VirtualData'
import NumberCount from '../components/NumberCount'
import { Link } from 'react-router-dom'
import RoutePaths from '../config'

const ShoppingCart = () => {


  return (
    <>
      <Header />
      <Banner page='Shopping Cart' path={['Home', 'Shopping Cart']} />
      <div className="px-5 my-5">
        <div className="table-responsive">
          <table className="table table-default text-center table-bordered">
            <thead>
              <tr className='fd-bg-primary text-white'>
                <th scope="col" className='p-3'>IMAGE</th>
                <th scope="col" className='p-3'>PRODUCT NAME</th>
                <th scope="col" className='p-3'>UNTIL PRICE</th>
                <th scope="col" className='p-3'>QTY</th>
                <th scope="col" className='p-3'>SUB TOTAL</th>
                <th scope="col" className='p-3'>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {
                productsTest.map(product => {
                  return (
                    <tr className="p-3">
                      <td scope="row w-25"><img src={product.img} alt={product.name} style={{ width: '50px', height: '50px' }} /></td>
                      <td className='fw-bold'>{product.name}</td>
                      <td>{product.price}</td>
                      <td>$250</td>
                      <td className='d-flex justify-content-center'><NumberCount min={1}/></td>
                      <td className='cursor-pointer'><i className="bi bi-x" style={{lineHeight: '50px'}}></i></td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>
        <div className="my-4 d-flex justify-content-between">
          <div><Link to={RoutePaths.shop.path} className='fd-btn'>CONTINUE SHOPPING</Link></div>
          <div><Link to={RoutePaths.cart.path} className='fd-btn'>UPDATE CART</Link></div>
        </div>
        <div className="coupon-total d-flex gap-2 text-dark">
          <div className="coupon w-75 p-4 border border-1">
            <h5 className="fw-bold">Use Coupon Code</h5>
            <hr />
            <div className='my-3'>
              <label className='w-100'>
                <span>Have a coupon code?</span>
                <input type="text" className='w-100 form-control rounded-0 border' placeholder='XXX'/>
              </label>
            </div>
            <div className="submit w-25 shadow"><a href="#" className="fd-btn text-center">APPLY</a></div>
          </div>
          <div className="total p-4 border border-1 w-25">
            <h5 className="fw-bold">Order Total</h5>
            <hr />
            <div><span className='fw-bold'>Sutotal :</span><span className='float-end opacity-75'>$250</span></div>
            <div className='my-3'><span className='fw-bold'>Taxes :</span><span className='float-end opacity-75'>$300</span></div>
            <hr />
            <div><span className='fw-bold'>Grand Total:</span><span className='float-end opacity-75'>$550</span></div>
            <div className="submit mt-3"><Link to={"/checkout"} className="fd-btn text-center">PROCEED CHECKOUT</Link></div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default ShoppingCart