import React, { FC } from 'react'
import SlideShow from '../../components/SlideShow';
import ProductCart from '../../components/ProductCart'

const apiSlidesInfo = [
  { url: '/src/assets/img/slider3.jpg', alt: 'Banner 1', text: "<h2>Fresh Food & Healthly Organic Food</h2>" },
  { url: '/src/assets/img/slider4.jpg', alt: 'Banner 2', text: '' },
  { url: '/src/assets/img/slider5.jpg', alt: 'Banner 3', text: '' },
];

const productsTest = [
  
  { img : '/src/assets/img/slider3.jpg', reviews : 4, name: 'Image Name', price : 90, oldPrice : 100 },
  { img : '/src/assets/img/slider3.jpg', reviews : 4, name: 'Image Name 2', price : 100, oldPrice : 150 },
  { img : '/src/assets/img/slider3.jpg', reviews : 4, name: 'Image Name 3', price : 120, oldPrice : 200 },

]

const apiCategory = [
  { category_id: 1, name: 'Vegetals And Fruits' },
  { category_id: 2, name: 'Fruits' },
  { category_id: 3, name: 'Oil And Vinegar' },
  { category_id: 4, name: 'Apple Juice' },
  { category_id: 5, name: 'Océan Food' },
  { category_id: 6, name: 'Butter & Eggs' },
  { category_id: 7, name: 'Fresh Meat' },
]

type CategoryType = {
  category_id: string | number,
  name: string,
}[];

const AllCategory = (props: { categoryList: CategoryType }) => {

  return <div className="all-category border-1 border-light col-lg-3">
    <h5 className="fd-bg-primary p-2">ALL CATEGORIES</h5>
    <div className="category-list d-flex flex-column gap-3 p-2">
      {
        props.categoryList.map((category) => {
          return <div key={category.category_id} className="category text-dark">
            <span>{category.name}</span>
          </div>
        })
      }
    </div>
  </div>
}

const About : FC = () => {

  return (
    <div className="section-info p-2 rounded-3 my-5 border-2 border-color-light shadow text-black" style={{ height: '100px' }}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-3 d-flex gap-2">
            <div className='w-25 text-center'><i className="bi bi-heart fa-2x bg-"></i></div>
            <div><h6>Free Shipping</h6><span className="font-light opacity-75">Free UK shipping when you spend £30</span></div>
          </div>
          <div className="col-3">
            <div><h6>Get Fresh Products</h6><span className="font-light opacity-75">Free UK shipping when you spend £30</span></div>
          </div>
          <div className="col-3">
            <div><h6>MoneyBack Offer</h6><span className="font-light opacity-75">Free UK shipping when you spend £30</span></div>
          </div>
          <div className="col-3">
            <div><h6>Safe Payment</h6><span className="font-light opacity-75">Free UK shipping when you spend £30</span></div>
          </div>
        </div>
      </div>
    </div>
  );

}

const Promotion : FC = () => {

  return (
    <div className="section-promotion " style={{ minHeight : '170px'}}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-6 ps-0">
            <div><img className="w-100 h-100" src="/src/assets/img/banner1-1.jpg" alt="promotion 1" /></div>
          </div>
          <div className="col-6 pe-0">
            <div><img className="w-100 h-100" src="/src/assets/img/banner1-2.jpg" alt="promotion 1" /></div>
          </div>
        </div>
      </div>
    </div>
  );

}


const Section = () => {

  return (
    <section>
      <div className="container-fluid">
        <div className="row d-lg-flex px-5 my-5">
          <AllCategory categoryList={apiCategory} />
          <div className="fd-slideshow col-lg-9 shadow rounded-3 p-0">
            <SlideShow slidesInfo={apiSlidesInfo} />
          </div>
            <About />
            <Promotion />
            <div className="products-list d-flex gap-2">
              {
                productsTest.map((product) => <ProductCart {...product}/>)
              }
            </div>
        </div>
      </div>
    </section>
  )
}

export { Section };