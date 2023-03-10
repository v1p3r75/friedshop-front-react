import React from 'react'
import Footer from './includes/Footer';
import Header from './includes/Header';
import Banner from '../components/Banner';
import ProductDetails from '../components/ProductDetails';

const ViewProduct = () => {

  return (
    <>
        <Header />
        <Banner page="Shop Details" path={["Home", "Shop Details"]}/>
        <ProductDetails />
        <Footer />
    </>
  )
}

export default ViewProduct;