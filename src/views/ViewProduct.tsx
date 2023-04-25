import React, { useEffect } from 'react'
import Footer from './includes/Footer';
import Header from './includes/Header';
import Banner from '../components/Banner';
import Spinner from '../components/Spinner';
import ProductDetails from '../components/ProductDetails';
import { useParams } from 'react-router-dom';
import { useGetProductQuery } from "../store/apiquery/productApiSlice"

const ViewProduct = () => {

  const params = useParams()
  const { isLoading, data : details , isSuccess, isError } = useGetProductQuery(params.id);

  // useEffect(() => {

  //   console.log(data)
  // })

  return (
    <>
        <Header />
        <Banner page="Shop Details" path={["Home", "Shop Details"]}/>
        {
          !isLoading ? <ProductDetails product={details.data}/> : <Spinner />
        }
        
        <Footer />
    </>
  )
}

export default ViewProduct;