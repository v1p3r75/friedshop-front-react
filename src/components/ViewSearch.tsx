import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { apiCategory, productsTest } from '../views/VitualData';
import SimpleProduct from './SimpleProduct';
import SearchBar from './SearchBar';
import SearchCategory from './SearchCategory';
import { AllCategory } from '../views/includes/Section';

const ViewSearch = ({ setShow }: { setShow: Function }) => {

    const hideSearch = () => {
        setShow(false);
        document.body.classList.remove('overflow-hidden');
    }

    useEffect(() => {
        document.body.classList.add('overflow-hidden');
    }, []);


    return (
        <>
            <div className="position-absolute w-100 h-100 top-0 start-0" style={{ zIndex: '1', backgroundColor: 'rgba(0,0,0,0.75)' }}></div>
            <div className='position-absolute fw-bold top-0 end-0 w-25 p-3 bg-white h-100 text-black' style={{ zIndex: '2' }}>
                <h4 className="fw-bold w-100">SEARCH <span className="float-end cursor-pointer" onClick={hideSearch}><i className="bi bi-x"></i></span></h4><hr />
                <div className="overflow-auto">
                    <form action="" method="post" className='w-100 d-flex'>
                        <div className='w-75'><input type="text" name="searchquery" placeholder='Search Here ...' className='p-3 border border-1 rounded-0 w-100' /></div>
                        <div className='w-25'><button type='submit' className='btn-outline-none border-0 fd-bg-primary rounded-0 py-3 px-4 text-white'><i className="bi bi-search w-100"></i></button></div>
                    </form>
                </div>
                <div className='search-category opacity-75 mt-4'>
                    <div className="recent-search">
                        <h6>Recent Searchs</h6>
                        <SearchCategory type="recent" />
                    </div>
                    <div className="popular-search my-5">
                        <h6>Popular Searchs</h6>
                        <SearchCategory type="recent" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ViewSearch