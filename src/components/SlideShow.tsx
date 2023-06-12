import React, { ReactNode } from 'react'
import { Carousel } from 'react-responsive-carousel'
import { useGetAllSlidesQuery } from '../store/apiquery/slideApiSlice';
import { Slide } from '../views/VirtualData';
import { link } from '../Utils/Generals';
import Spinner from './Spinner';
import { Link } from 'react-router-dom';
import RoutePaths from '../config';

type SlideProps = {
  url: string,
  alt?: string,
  text?: string,
}[];

type SlideOptions = {
  tumbs: boolean,
  status: boolean
}

const SlideShow = (props: { options?: {} }) => {

  const { isLoading, data: slides, isError } = useGetAllSlidesQuery("api/slides");


  return (
    <Carousel autoPlay={true} showArrows={false} showStatus={false} showThumbs={false} swipeable={true} infiniteLoop={true} interval={3000}>
      {!isLoading && !isError ?
        slides['data'].map((slide: Slide) => {
          return <div className='f-slide position-relative shadow h-100' key={slide.id}>
            <img src={link(slide.image)} alt={slide.text} className="w-100 h-100" />
            <div className="f-slide-text position-absolute text-start" style={{ width: '50%', top: '30%', left: '5%' }}>
              <div>
                <h1 className='fw-bold'>{slide.text}</h1>
                <h5 className='my-3 fw-bold'>Free Shipping on all Your Order</h5>
                <Link to={RoutePaths.shop} className="fd-btn col-12 col-lg-6 text-center p-3">SHOP NOW <i className="bi bi-arrow-right"></i></Link>
              </div>
            </div>
          </div>
        }) :
        <Spinner />
      }
    </Carousel>
  )

}

export default SlideShow;