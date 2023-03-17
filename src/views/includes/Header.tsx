import React, { SyntheticEvent, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { SocialsNetworks } from '../../components/SocialsNetworks'
import ViewCart from '../../components/ViewCart'
import ViewSearch from '../../components/ViewSearch'
import Lang from '../../components/Lang'
import RoutePaths from '../../config'
import { cartKeyName, getNbTotal, wishlistKeyName } from '../../Utils/Generals'

const Header = () => {

    const [showCart, setShowCart] = useState(false);
    const [showSearch, setShowSearch] = useState(false);
    const [totalWishlist, setTotalWishlist] = useState(0);
    const [totalShopping, setTotalShopping] = useState(0);

    useEffect(() => {

        setTotalShopping(getNbTotal(cartKeyName));
        setTotalWishlist(getNbTotal(wishlistKeyName));

    }, []);


    const viewCart = (e : SyntheticEvent) => {
        e.preventDefault();
        setShowCart(true);
    };

    const viewSearch = (e : SyntheticEvent) => {
        e.preventDefault();
        setShowSearch(true);
    };

  return (<>
    <div className="header bg-white shadow">
        <div className="d-lg-flex justify-content-between font-light fd-bg-secondary px-5 py-2">
            <div className="d-flex header-contacts gap-3">
                <span><i className='bi bi-envelope fd-color-primary'></i>&nbsp; elfriedv16@gmail.com</span>
                <span><i className="bi bi-geo-alt fd-color-primary"></i>&nbsp; Cotonou, Bénin</span>
            </div>
            <div className='d-flex header-socials-lang'>
                <SocialsNetworks />
                <Lang />
            </div>
        </div>
        <div className="navigation font-regular d-flex flex-wrap justify-content-between mx-5 py-4">
            <nav className='navbar navbar-expand-lg'>
                <Link to={"/"} className='navbar-brand me-5'><img src="/src/assets/img/logo.png" alt="Logo" /></Link>
                <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#headerNavbar">
                    <span className="navbar-icon-toggler"><i className="bi bi-list"></i></span>
                </button>
                <nav className="collapse navbar-collapse" id="headerNavbar">
                    <div className="container-fluid d-lg-flex justify-content-between">
                        <ul className="navbar-nav d-lg-flex gap-3">
                            <li className="navbar-item">
                                <Link to={RoutePaths.home} className="navbar-link fd-hover-color-primary text-dark">Home</Link>
                            </li>
                            <li className="navbar-item">
                                <Link to={RoutePaths.shop} className="navbar-link fd-hover-color-primary text-dark">Shop</Link>
                            </li>
                            <li className="navbar-item">
                                <Link to={RoutePaths.blog} className="navbar-link fd-hover-color-primary text-dark">Blog</Link>
                            </li>
                            <li className="navbar-item">
                                <Link to={RoutePaths.contact} className="navbar-link fd-hover-color-primary text-dark">Contact US</Link>
                            </li>
                            <li className="navbar-item">
                                <Link to={RoutePaths.team} className="navbar-link fd-hover-color-primary text-dark">Teams</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </nav>
            <div className="d-flex gap-2 align-self-center">
                        <div onClick={viewCart}><a href='#' className="position-relative border-3 shadow border-light py-2 px-3 text-dark fd-hover-bg-primary"><i className="bi bi-cart3"></i><span className="position-absolute top-0">{totalShopping}</span></a></div>
                        <div><Link to={RoutePaths.wishlist} className="position-relative border-3 shadow border-light py-2 px-3 text-dark fd-hover-bg-primary"><i className="bi bi-heart"></i><span className="position-absolute top-0">{totalWishlist}</span></Link></div>
                        <div onClick={viewSearch}><a href='#' className="position-relative border-3 shadow border-light py-2 px-3 text-dark fd-hover-bg-primary"><i className="bi bi-search"></i></a></div>
                        <div><Link to={RoutePaths.login} className="position-relative border-3 shadow border-light py-2 px-3 text-dark fd-hover-bg-primary"><i className="bi bi-person"></i></Link></div>
                    </div>
        </div>
    </div>
    {showCart ? <ViewCart  setShow={setShowCart}/> : null}
    {showSearch ? <ViewSearch  setShow={setShowSearch}/> : null}
    </>
  )
}

export default Header