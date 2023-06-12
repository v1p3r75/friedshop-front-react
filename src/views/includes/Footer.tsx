import React from 'react'
import NewsLetter from '../../components/NewsLetter'
import { SocialsNetworks } from '../../components/SocialsNetworks'
import { Link } from 'react-router-dom'
import RoutePaths from '../../config'

const Footer = () => {

    return (
        <footer className='mt-5'>
            <NewsLetter />
            <div className='footer-content bg-black gap-3 px-3 px-lg-5 py-5'>
                <div className="f-content d-flex flex-wrap justify-content-space-between">
                    <div className="contacts w-20">
                        <h5 className='my-5'>Our Address</h5>
                        <div className="opacity-75">
                            <div><i className="bi bi-geo-alt fd-color-primary me-2"></i>Cotonou, Bénin</div>
                            <div><i className="bi bi-phone fd-color-primary me-2"></i>+229 96457545</div>
                            <div><i className="bi bi-envelope fd-color-primary me-2"></i>elfriedv16@gmail.com</div>
                        </div>
                        <SocialsNetworks />
                    </div>
                    <div className="informations">
                        <h5 className='my-5'>Information</h5>
                        <div className="opacity-75">
                            <div><a href="#">About Us</a></div>
                            <div><a href="#">Contact Us</a></div>
                            <div><a href="#">Privacy Policy</a></div>
                            <div><a href="#">Frequently Questions</a></div>
                            <div><a href="#">Costomer Service</a></div>
                        </div>
                    </div>
                    <div className="account">
                        <h5 className='my-5'>My Account</h5>
                        <div className="opacity-75">
                            <div><Link to={RoutePaths.userAccount}>My Account</Link></div>
                            <div><a href="#">Login Page</a></div>
                            <div><a href="#">Shopping Cart</a></div>
                            <div><a href="#">Register Account</a></div>
                            <div><a href="#">Logout</a></div>
                        </div>
                    </div>
                    <div className="help">
                        <h5 className='my-5'>Need Help?</h5>
                        <div className="opacity-75">
                            <div><a href="#">Help Center</a></div>
                            <div><a href="#">Fodo Market Terms</a></div>
                            <div><a href="#">Author Terms</a></div>
                            <div><a href="#">Fodo Licences</a></div>
                            <div><a href="#">Contact Us</a></div>
                        </div>
                    </div>
                    <div className="categories">
                        <h5 className='my-5'>Categories</h5>
                        <div className="opacity-75">
                            <div><a href="#">Fruits & Vegetables</a></div>
                            <div><a href="#">Dairy Products</a></div>
                            <div><a href="#">Package Foods</a></div>
                            <div><a href="#">Beverage</a></div>
                            <div><a href="#">Health & Wellness</a></div>
                        </div>
                    </div>
                </div>
                <div className='my-5'>
                    <div className="d-flex flex-wrap gap-3">
                        <h6 className='fw-bold'>Food & Vegetabe: </h6>
                        <p className='opacity-50'><span>Carrots | </span><span>Broccoli | </span><span>Patato | </span><span>Carrots | </span><span>Broccoli | </span><span>Patato | </span><span>Carrots | </span><span>Broccoli | </span><span>Patato | </span></p>
                    </div>
                    <div className="d-flex flex-wrap gap-3">
                        <h6 className='fw-bold'>Health & Beauthy: </h6>
                        <p className='opacity-50'><span>Skin Kare | </span><span>Body Shower | </span><span>Makeup | </span></p>
                    </div>
                </div><hr />
                <div className="d-flex flex-wrap justify-content-between">
                    <p><img src="/img/payment.png" alt="" className='w-100'/></p>
                    <p className="opacity-75">Copyright &copy; 2023 By <span className='fw-bold'>Elfried Fortunatus KIDJE</span></p>
                </div>
            </div>
        </footer>
    )
}

export default Footer