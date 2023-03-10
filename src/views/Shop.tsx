import React from 'react'
import Header from './includes/Header'
import Footer from './includes/Footer'
import Banner from '../components/Banner'
import { PopularProducts } from './includes/Section'

const Shop = () => {
  return (
    <>
        <Header />
        <Banner page='Shop' path={['Home', 'Shop']}/>
        <div className="shop d-flex gap-3 my-3 text-black p-5">
          <div className="shop-section w-75">
            <div className="d-flex justify-content-between">
              <div>
                <span className='me-2'><i className="bi bi-grid-3x3-gap-fill"></i></span>
                <span><i className="bi bi-view"></i></span>
              </div>
              <h5 className="fw-bold">Showing 1-17 of 18 Result</h5>
              <nav className="dropdown">
                <a href="#" className="dropdown-toggle fd-btn" data-bs-toggle='dropdown' data-bs-auto-close='outside'>Default Sorting</a>
                <div className="dropdown-menu rounded-0 text-start animate__animated animate__fadeIn">
                  <ul>
                    <li><a href="#" className="dropdown-item fd-hover-color-primary text-black">Name<i className="bi bi-sort-down"></i></a></li>
                    <li><a href="#" className="dropdown-item fd-hover-color-primary text-black">Date</a></li>
                    <li><a href="#" className="dropdown-item fd-hover-color-primary text-black">Recent</a></li>
                    <li><a href="#" className="dropdown-item fd-hover-color-primary text-black">Recent</a></li>
                  </ul>
                </div>
              </nav>
            </div>
            <PopularProducts />
          </div>
        </div>
        <Footer />
    </>
  )
}

export default Shop