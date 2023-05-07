import React, { SyntheticEvent } from 'react'
import Header from './includes/Header'
import Banner from '../components/Banner'
import Footer from './includes/Footer'
import { User, buildCheckoutData, getTotal } from '../Utils/Generals'
import { useAppSelector } from '../hooks/redux-hooks'

const Checkout = () => {

    const user : User = useAppSelector(state => state.user);
    const data = buildCheckoutData();

    const submitCheckout = (e : SyntheticEvent) => {

        e.preventDefault();
        console.log(data);
        
    }

    return (
        <>
            <Header />
            <Banner page='Checkout' path={['Home', 'Checkout']} />
            <div className="checkout-page d-flex gap-3 justify-content-between px-5 my-5 text-black">
                <form action="" method="post" className="checkout-service p-3 bg-white w-75 border border-1">
                    <h4 className='fw-bold'>Billing Details</h4>
                    <hr />
                    <div className='d-flex gap-2 mt-5'>
                        <label className='w-50'>
                            <span>First Name *</span>
                            <input type="text" name="firstname" value={user.firstname} disabled className="form-control w-100 rounded-0 p-2"/>
                        </label>
                        <label className='w-50'>
                            <span>Last Name *</span>
                            <input type="email" name="lastname" value={user.lastname} disabled className="form-control w-100 rounded-0 p-2"/>
                        </label>
                    </div>
                    <div className='my-4'>
                        <label className='w-100'>
                            <span>Email *</span>
                            <input type="email" name="email" value={user.email} disabled className="form-control w-100 rounded-0 p-2"/>
                        </label>
                    </div>
                    <div>
                        <label className='w-100'>
                            <span>Phone *</span>
                            <input type="text" name="phone" value={user.phone} disabled className="form-control w-100 rounded-0 p-2"/>
                        </label>
                    </div>
                    <div className='my-4'>
                        <label className='w-100'>
                            <span>Country *</span>
                            <select name="country" disabled className="form-control">
                                <option value="" selected>Bénin</option>
                                <option value="">France</option>
                                <option value="">United Kingdom</option>
                            </select>
                        </label>
                    </div>
                    <div>
                        <label className='w-100'>
                            <span>Zip *</span>
                            <input type="text" name="firstname" value={user.address} disabled className="form-control w-100 rounded-0 p-2"/>
                        </label>
                    </div>
                    <div className='my-4'>
                        <label className='d-flex gap-2 w-100'>
                            <div><input type="checkbox" name="adress_skip"/></div>
                            <span>Ship to a different address?</span>
                        </label>
                    </div>
                    <div>
                        <label>
                            <span>Orders notes (Optional)</span>
                        </label>
                        <textarea name="orderNotes" cols={100} rows={10} className='w-100 p-2 border'></textarea>
                    </div>
                </form>
                <div className="w-25 checkout-validate">
                    <div className="bg-white p-3 border border-1">
                        <h5 className="fw-bold">Checkout Summary</h5><hr />
                        <div className="opacity-75">
                            <div><span className='fw-bold'>Sutotal :</span><span className='float-end opacity-75'>${getTotal()}</span></div><hr />
                            <div><span className='fw-bold'>Coupon :</span><span className='float-end opacity-75'>$0.00</span></div><hr />
                            <div><span className='fw-bold'>Total :</span><span className='float-end opacity-75'>${getTotal()}</span></div><hr />
                        </div>
                    </div>
                    <div className="bg-white p-3 border border-1 mt-4">
                        <h5 className="fw-bold">Payment Method</h5><hr />
                        <form action='' method="post">
                            <div>
                                <label className='d-flex gap-2 w-100'>
                                    <div><input type="checkbox" name="check"/></div>
                                    <span>Direct bank transfer</span>
                                </label>
                            </div>
                            <div className='my-4'>
                                <label className='d-flex gap-2 w-100'>
                                    <div><input type="checkbox" name="check"/></div>
                                    <span>Cash on delivery</span>
                                </label>
                            </div>
                            <div>
                                <label className='d-flex gap-2 w-100'>
                                    <div><input type="checkbox" name="check"/></div>
                                    <span>Check payments</span>
                                </label>
                            </div>
                            <div className='my-4'>
                                <label className='d-flex gap-2 w-100'>
                                    <div><input type="checkbox" name="check"/></div>
                                    <span>Direct bank transfer</span>
                                </label>
                            </div>
                            <div><a href="#" className="fd-btn w-50 text-center" onClick={submitCheckout}>PLACE ORDER</a></div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Checkout