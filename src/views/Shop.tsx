import { useState } from 'react'
import Header from './includes/Header'
import Footer from './includes/Footer'
import Banner from '../components/Banner'
import { Category, PopularProducts, SortProducts } from './includes/Section'
import SearchBar from '../components/SearchBar'
import { CategoryType } from './VirtualData'
import Tags from '../components/Tags'
import Archives from '../components/Archives'
import { useGetAllCategoriesQuery } from '../store/apiquery/categoryApiSlice';
import Spinner from '../components/Spinner'


const Shop = () => {

  const {isLoading, data : categoryList, isError }  = useGetAllCategoriesQuery("api/categories");


  const [type, setType] = useState('grid');

  const changeTypeToGrid = () => { setType('grid'); }
  const changeTypeToList = () => { setType('list'); }

  return (
    <>
        <Header />
        <Banner page='Shop' path={['Home', 'Shop']}/>
        <div className="shop d-flex flex-wrap gap-3 my-3 text-black p-3 p-lg-5"> 
          <div className="shop-section col-12 col-lg-8">
            <div className="d-flex justify-content-between">
              <div>
                <span className={type === 'grid' ? 'me-2 cursor-pointer fd-color-primary' : 'me-2 cursor-pointer'} onClick={changeTypeToGrid}>
                  <i className="bi bi-grid-3x3-gap-fill"></i>
                </span>
                <span className={type === 'list' ? 'me-2 cursor-pointer fd-color-primary' : 'd-none d-lg-block me-2 cursor-pointer'} onClick={changeTypeToList}>
                  <i className="bi bi-list-task"></i>
                </span>
              </div>
              <h5 className="fw-bold d-none d-lg-block">Showing 1-17 of 18 Result</h5>
              <nav className="dropdown">
                <a href="#" className="dropdown-toggle fd-btn bg-white text-black" data-bs-toggle='dropdown' data-bs-auto-close='outside'>Default Sorting</a>
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
            <PopularProducts type={type} />
          </div>
          <aside className='col-12 col-lg-3'>
            <SearchBar />
            <div className="category-list text-black bg-white w-100 border border-1 fd-hover-border-primary p-3 my-5">
              <h5>Categories</h5><hr />
              <div className="d-flex flex-column gap-2">
              { !isLoading && !isError ? 
                <div className="category-list d-flex flex-column gap-4 py-2 px-3">
                  {
                    categoryList['data'].map((category : CategoryType) => <Category category={category} key={category.id}/>)
                  }
                </div> : 
                <Spinner />
                }
              </div>
            </div>
            <div className="top-products text-black bg-white w-100 border border-1 fd-hover-border-primary p-3 my-5">
                <h5>Populars Products</h5><hr />
                <SortProducts />
            </div>
            <Tags />
            <Archives />
          </aside>
        </div>
        <Footer />
    </>
  )
}

export default Shop