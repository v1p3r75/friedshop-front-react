import React from 'react'
import Reviews from './Reviews'
import NumberCount from './NumberCount'
import { PopularProducts } from '../views/includes/Section'
import { Carousel } from 'react-responsive-carousel'
import AddToCart from './AddToCart'
import { ProductType } from './ProductCart'
import { link } from '../Utils/Generals';
import { Link } from 'react-router-dom'
import RoutePaths from '../config'

const ProductDetails = ({product} : {product : ProductType}) => {

  return (
    <div className='view-product px-3 px-lg-5'>
        <div className="details-generals border border-1 fd-hover-border-primary bg-white row text-black justify-content-between p-5 gap-2 mt-5" style={{minHeight : '400px'}}>
            <div className='p-img col-12 col-lg-6'>
                <div className="product-img col-9 h-25">
                    <Carousel showArrows={false} showIndicators={false} swipeable={true}>
                        <div className="others-img"><img src={link(product.img)} alt="Alt" /></div>
                        <div className="others-img"><img src={link(product.img)} alt="Alt" /></div>
                        <div className="others-img"><img src={link(product.img)} alt="Alt" /></div>
                        <div className="others-img"><img src={link(product.img)} alt="Alt" /></div>
                    </Carousel>
                </div>
            </div>
            <div className="p-details col-12 col-lg-5">
                <div className='d-flex flex-wrap gap-2'><Reviews rating={5}/><span className='fd-color-primary'>(25 Reviews)</span></div>
                <h3 className="fw-bold my-4">{product.name}</h3>
                <p className='fw-bold opacity-75'>{product.desc}</p>
                <div className="d-flex flex-wrap gap-2">
                    <h1 className="fw-bold fd-color-primary">${product.price}</h1>
                    <h2 className="fw-bold align-self-end" style={{textDecoration : "line-through"}}>${product.old_price}</h2>
                </div><hr />
                <div className="categories-list d-flex flex-wrap gap-2">
                    <h5 className="fw-bold">Categories : </h5>
                    <div><span> Cover,</span><span> Seat,</span><span> Car,</span><span> Parts</span></div>
                </div><hr />
                <div className="p-types d-flex flex-wrap gap-2 align-items-center">
                    <h5 className="fw-bold d-flex flex-wrap gap-2 mb-0">Colors : </h5>
                    <div className='d-flex flex-wrap gap-2'>
                        <span className='p-color bg-danger'></span><span className='p-color bg-warning'></span>
                        <span className='p-color bg-info'></span><span className='p-color bg-primary'></span><span className='p-color bg-secondary'></span>
                    </div>
                </div>
                <div className="p-types d-flex flex-wrap gap-2 align-items-center mt-3">
                    <h5 className="fw-bold d-flex flex-wrap gap-2 mb-0">SIZE : </h5>
                    <div className='d-flex flex-wrap gap-2 opacity-75'>
                        <span className='border border-1 p-1 rounded-2 cursor-pointer'>Small</span>
                        <span className='border border-1 p-1 rounded-2 cursor-pointer'>Medium</span>
                        <span className='border border-1 p-1 rounded-2 cursor-pointer'>Large</span>
                        <span className='border border-1 p-1 rounded-2 cursor-pointer'>Extra Large</span>
                    </div>
                </div>
                <div className='d-flex flex-wrap gap-2 my-4'>
                    <NumberCount product={product} min={1} />
                    <AddToCart product={product} divClass='align-self-center'/>
                </div>
                <div className="p-share d-flex flex-wrap gap-2 align-items-center">
                    <h5 className="fw-bold d-flex flex-wrap gap-2 mb-0">Share : </h5>
                    <div className='d-flex flex-wrap gap-2'>
                        <div><a href="#" className='text-black'><i className="bi bi-facebook"></i></a></div>
                        <div><a href="#" className='text-black'><i className="bi bi-twitter"></i></a></div>
                        <div><a href="#" className='text-black'><i className="bi bi-pinterest"></i></a></div>
                        <div><a href="#" className='text-black'><i className="bi bi-instagram"></i></a></div>
                    </div>
                </div>
            </div>
        </div>
        <div className="p-desc p-5 my-5 bg-white border border-1 text-black" style={{minHeight : '400px'}}>
            <div className='tab-title fw-bold d-flex flex-wrap gap-2'>
                <div className='t-t'><a href="#" className='fd-color-primary'>Description</a></div>
                <div className='t-t'><a href="#" className='text-black'>Additional Informations</a></div>
                <div className='t-t'><a href="#" className='text-black'>Reviews</a></div>
            </div><hr />
            <div className="opacity-50 fw-bold mt-2">
                <div className="tab-content">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda iste debitis eum quis vitae dolores sequi, quo vel ratione veniam. Placeat, quos! Consequatur possimus voluptas dolore dignissimos aperiam explicabo sed. Id optio, sapiente quo accusamus quae vel nesciunt adipisci nam eos. Rerum, alias adipisci. Nesciunt esse doloremque odit! Molestiae quia hic maxime voluptas, quos modi. Veniam harum aspernatur incidunt totam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda iste debitis eum quis vitae dolores sequi, quo vel ratione veniam. Placeat, quos! Consequatur possimus voluptas dolore dignissimos aperiam explicabo sed. Id optio, sapiente quo accusamus quae vel nesciunt adipisci nam eos. Rerum, alias adipisci. Nesciunt esse doloremque odit! Molestiae quia hic maxime voluptas, quos modi. Veniam harum aspernatur incidunt totam!</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda iste debitis eum quis vitae dolores sequi, quo vel ratione veniam. Placeat, quos! Consequatur possimus voluptas dolore dignissimos aperiam explicabo sed. Id optio, sapiente quo accusamus quae vel nesciunt adipisci nam eos. Rerum, alias adipisci. Nesciunt esse doloremque odit! Molestiae quia hic maxime voluptas, quos modi. Veniam harum aspernatur incidunt totam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda iste debitis eum quis vitae dolores sequi, quo vel ratione veniam. Placeat, quos! Consequatur possimus voluptas dolore dignissimos aperiam explicabo sed. Id optio, sapiente quo accusamus quae vel nesciunt adipisci nam eos. Rerum, alias adipisci. Nesciunt esse doloremque odit! Molestiae quia hic maxime voluptas, quos modi. Veniam harum aspernatur incidunt totam!</p>
                </div>
            </div>
        </div>
        <div className="related-products text-black my-5">
            <div className="d-flex flex-wrap justify-content-between mb-5">
                <h4>Related Products</h4>
                <div><Link to={RoutePaths.shop} className="fd-btn fw-bold">View All <i className="bi bi-arrow-right"></i></Link></div>
            </div>
              <PopularProducts grid={4} />
        </div>
    </div>
  )
}

export default ProductDetails