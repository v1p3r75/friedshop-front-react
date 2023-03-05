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
    <Carousel {... props}>
        { data.map((slide) => {
          return <div className='f-slide position-relative' key={slide.alt}>
            <img src={slide.url} alt={slide.alt} />
            <div className="f-slide-text position-absolute top-0">
              <div>{slide.text}</div>
              <button className='btn fd-bg-primary'>Shop Now</button>
            </div>
          </div>
        })}
    </Carousel>
  )

}

export default SlideShow;