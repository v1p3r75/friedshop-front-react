import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {

  return (
    <div className="header bg-white">
        <div className="d-lg-flex justify-content-between font-light fd-bg-secondary px-5 py-2">
            <div className="d-flex header-contacts gap-3">
                <span><i className='bi bi-envelope fd-color-primary'></i>&nbsp; elfriedv16@gmail.com</span>
                <span><i className="bi bi-geo-alt fd-color-primary"></i>&nbsp; Cotonou, Bénin</span>
            </div>
            <div className='d-flex header-socials-lang'>
                <div className="d-flex gap-3 header-socials">
                    <a href="#"><i className='bi bi-facebook'></i></a>
                    <a href="#"><i className='bi bi-twitter'></i></a>
                    <a href="#"><i className='bi bi-instagram'></i></a>
                    <a href="#"><i className='bi bi-vimeo'></i></a>
                </div>
                <div className='header-lang ms-5'>
                    <nav className="dropdown">
                        <a href="#" className="dropdown-toggle" data-bs-toggle='dropdown' data-bs-auto-close='outside'>English</a>
                        <div className="dropdown-menu rounded-0 text-start animate__animated animate__fadeIn">
                            <ul>
                                <li><a href="#" className="dropdown-item text-black">French</a></li>
                                <li><a href="#" className="dropdown-item text-black">Arabic</a></li>
                                <li><a href="#" className="dropdown-item text-black">Spanish</a></li>
                                <li><a href="#" className="dropdown-item text-black">Deustch</a></li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
        <div className="navigation font-regular fw-500 mx-5 py-4">
            <nav className='navbar navbar-expand-lg'>
                <a className='navbar-brand me-5' href='#'><img src="/src/assets/img/logo.png" alt="Logo" /></a>
                <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#headerNavbar">
                    <span className="navbar-icon-toggler"><i className="bi bi-list"></i></span>
                </button>
                <nav className="collapse navbar-collapse" id="headerNavbar">
                    <div className="container-fluid d-lg-flex justify-content-between">
                        <ul className="navbar-nav d-lg-flex gap-3">
                            <li className="navbar-item">
                                <Link to={'/'} className="navbar-link text-dark">Home</Link>
                            </li>
                            <li className="navbar-item">
                                <Link to={'/'} className="navbar-link text-dark">Shop</Link>
                            </li>
                            <li className="navbar-item">
                                <Link to={'/'} className="navbar-link text-dark">Blog</Link>
                            </li>
                            <li className="navbar-item">
                                <Link to={'/'} className="navbar-link text-dark">Contact US</Link>
                            </li>
                            <li className="navbar-item">
                                <Link to={'/'} className="navbar-link text-dark">Faq</Link>
                            </li>
                        </ul>
                        <ul className="navbar-nav d-lg-flex gap-2">
                            <li className="navbar-item"><Link to="/cart" className="navbar-link position-relative border-3 shadow border-light py-2 px-3 text-dark"><i className="bi bi-cart3"></i><span className="position-absolute top-0">2</span></Link></li>
                            <li className="navbar-item"><Link to="/wishlist" className="navbar-link position-relative border-3 shadow border-light py-2 px-3 text-dark"><i className="bi bi-heart"></i><span className="position-absolute top-0">3</span></Link></li>
                            <li className="navbar-item"><Link to="/search" className="navbar-link position-relative border-3 shadow border-light py-2 px-3 text-dark"><i className="bi bi-search"></i></Link></li>
                            <li className="navbar-item"><Link to="/account" className="navbar-link position-relative border-3 shadow border-light py-2 px-3 text-dark"><i className="bi bi-person"></i></Link></li>
                        </ul>
                    </div>
                </nav>
            </nav>
        </div>
    </div>
  )
}

export default Header