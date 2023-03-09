import React from 'react'
import { Link } from 'react-router-dom'
import { SocialsNetworks } from '../../components/SocialsNetworks'

const Header = () => {

  return (
    <div className="header bg-white shadow">
        <div className="d-lg-flex justify-content-between font-light fd-bg-secondary px-5 py-2">
            <div className="d-flex header-contacts gap-3">
                <span><i className='bi bi-envelope fd-color-primary'></i>&nbsp; elfriedv16@gmail.com</span>
                <span><i className="bi bi-geo-alt fd-color-primary"></i>&nbsp; Cotonou, Bénin</span>
            </div>
            <div className='d-flex header-socials-lang'>
                <SocialsNetworks />
                <div className='header-lang ms-5'>
                    <nav className="dropdown">
                        <a href="#" className="dropdown-toggle" data-bs-toggle='dropdown' data-bs-auto-close='outside'>English</a>
                        <div className="dropdown-menu rounded-0 text-start animate__animated animate__fadeIn">
                            <ul>
                                <li><a href="#" className="dropdown-item fd-hover-color-primary text-black">French</a></li>
                                <li><a href="#" className="dropdown-item fd-hover-color-primary text-black">Arabic</a></li>
                                <li><a href="#" className="dropdown-item fd-hover-color-primary text-black">Spanish</a></li>
                                <li><a href="#" className="dropdown-item fd-hover-color-primary text-black">Deustch</a></li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
        <div className="navigation font-regular d-flex flex-wrap justify-content-between mx-5 py-4">
            <nav className='navbar navbar-expand-lg'>
                <a className='navbar-brand me-5' href='#'><img src="/src/assets/img/logo.png" alt="Logo" /></a>
                <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#headerNavbar">
                    <span className="navbar-icon-toggler"><i className="bi bi-list"></i></span>
                </button>
                <nav className="collapse navbar-collapse" id="headerNavbar">
                    <div className="container-fluid d-lg-flex justify-content-between">
                        <ul className="navbar-nav d-lg-flex gap-3">
                            <li className="navbar-item">
                                <Link to={'/'} className="navbar-link fd-hover-color-primary text-dark">Home</Link>
                            </li>
                            <li className="navbar-item">
                                <Link to={'/'} className="navbar-link fd-hover-color-primary text-dark">Shop</Link>
                            </li>
                            <li className="navbar-item">
                                <Link to={'/'} className="navbar-link fd-hover-color-primary text-dark">Blog</Link>
                            </li>
                            <li className="navbar-item">
                                <Link to={'/'} className="navbar-link fd-hover-color-primary text-dark">Contact US</Link>
                            </li>
                            <li className="navbar-item">
                                <Link to={'/'} className="navbar-link fd-hover-color-primary text-dark">Faq</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </nav>
            <div className="d-flex gap-2 align-self-center">
                        <div><Link to="/cart" className="position-relative border-3 shadow border-light py-2 px-3 text-dark fd-hover-bg-primary"><i className="bi bi-cart3"></i><span className="position-absolute top-0">2</span></Link></div>
                        <div><Link to="/wishlist" className="position-relative border-3 shadow border-light py-2 px-3 text-dark fd-hover-bg-primary"><i className="bi bi-heart"></i><span className="position-absolute top-0">3</span></Link></div>
                        <div><Link to="/search" className="position-relative border-3 shadow border-light py-2 px-3 text-dark fd-hover-bg-primary"><i className="bi bi-search"></i></Link></div>
                        <div><Link to="/account" className="position-relative border-3 shadow border-light py-2 px-3 text-dark fd-hover-bg-primary"><i className="bi bi-person"></i></Link></div>
                    </div>
        </div>
    </div>
  )
}

export default Header