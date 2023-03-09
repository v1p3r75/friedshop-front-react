import React, {ReactNode} from 'react'
import { Carousel } from 'react-responsive-carousel'

type SlideProps = {
  url : string,
  alt? : string,
  text? : string,
}[];

type SlideOptions = {
  tumbs : boolean,
  status : boolean
}

const SlideShow = (props : {slidesInfo : SlideProps, options? : Object}) => {
  
  const data = props.slidesInfo;
  
  return (
    <Carousel autoPlay={true} showArrows={false} showStatus={false} showThumbs={false} swipeable={true} infiniteLoop={true} interval={3000}>
        { data.map((slide) => {
          return <div className='f-slide position-relative shadow' key={slide.alt}>
            <img src={slide.url} alt={slide.alt} className="w-100 h-100"/>
            <div className="f-slide-text position-absolute text-start" style={{width : '50%', top : '30%', left : '5%'}}>
              <div>
                <h1 className='fw-bold'>Fresh Food & Healthly Organic Foods</h1>
                <h5 className='my-3 fw-bold'>Free Shipping on all Your Order</h5>
                <a href="#" className="fd-btn w-30 p-3">SHOP NOW</a>
              </div>
            </div>
          </div>
        })}
    </Carousel>
  )

}

export default SlideShow;