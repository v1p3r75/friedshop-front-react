import React, { SyntheticEvent } from 'react'
import Header from './includes/Header'
import Banner from '../components/Banner'
import Footer from './includes/Footer'
import { User, buildCheckoutData, getTotal } from '../Utils/Generals'
import { useAppSelector } from '../hooks/redux-hooks'
import { useCreateCommandMutation } from '../store/apiquery/CommandApiSlice'
import { HandleResult } from '../components/HandleResult'
import LoadingButton from '../components/LoadingButton'

const Checkout = () => {

    const user : User = useAppSelector(state => state.user);
    const data = buildCheckoutData();
    const [sendData, result] = useCreateCommandMutation();

    const submitCheckout = (e : SyntheticEvent) => {

        e.preventDefault();

        sendData(data)
       
    }


    return (
        <>
            <Header />
            <Banner page='Checkout' path={['Home', 'Checkout']} />
            <div className="checkout-page row gap-3 justify-content-between px-3 px-lg-5 my-5 text-black">
                <form action="" method="post" className="checkout-service p-3 bg-white col-12 col-lg-8 border border-1">
                    <h4 className='fw-bold'>Billing Details</h4>
                    <hr />
                    <HandleResult result={result} />
                    <div className='d-flex gap-2 mt-5'>
                        <label className='w-50'>
                            <span>First Name *</span>
                            <input type="text" name="firstname" defaultValue={user.firstname || ''} readOnly  className="form-control w-100 rounded-0 p-2"/>
                        </label>
                        <label className='w-50'>
                            <span>Last Name *</span>
                            <input type="email" name="lastname" defaultValue={user.lastname || ''} readOnly  className="form-control w-100 rounded-0 p-2"/>
                        </label>
                    </div>
                    <div className='my-4'>
                        <label className='w-100'>
                            <span>Email *</span>
                            <input type="email" name="email" defaultValue={user.email || ''} readOnly  className="form-control w-100 rounded-0 p-2"/>
                        </label>
                    </div>
                    <div>
                        <label className='w-100'>
                            <span>Phone *</span>
                            <input type="text" name="phone" defaultValue={user.phone || ''} readOnly  className="form-control w-100 rounded-0 p-2"/>
                        </label>
                    </div>
                    <div className='my-4'>
                        <label className='w-100'>
                            <span>Country *</span>
                            <select name="country" className="form-control">
                                <option defaultValue="">Bénin</option>
                                <option defaultValue="">France</option>
                                <option defaultValue="">United Kingdom</option>
                            </select>
                        </label>
                    </div>
                    <div>
                        <label className='w-100'>
                            <span>Address *</span>
                            <input type="text" name="firstname" defaultValue={user.address} readOnly className="form-control w-100 rounded-0 p-2"/>
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
                <div className="col-12 col-lg-3 checkout-validate">
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
                            <LoadingButton loadingState={result.isLoading}>
                                <div><a href="#" className="fd-btn w-50 text-center" onClick={submitCheckout}>PLACE ORDER</a></div>
                            </LoadingButton>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Checkout