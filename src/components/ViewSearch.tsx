import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import SearchCategory from './SearchCategory';
import { useSearchProductQuery } from '../store/apiquery/productApiSlice';
import { ProductType } from './ProductCart';
import Spinner from './Spinner';

const ViewSearch = ({ setShow }: { setShow: Function }) => {
    const [products, setProducts] = useState<ProductType[]>([]);
    const [loading, setLoading] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    const { data: results, isLoading } = useSearchProductQuery(searchQuery);

    useEffect(() => {
        setLoading(isLoading);
        if (!isLoading && results) {
            setProducts(results.data);
        }
    }, [isLoading, results]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
    };

    const hideSearch = () => {
        setShow(false);
        document.body.classList.remove('overflow-hidden');
    };

    useEffect(() => {
        document.body.classList.add('overflow-hidden');

        return () => {
            document.body.classList.remove('overflow-hidden');
        };
    }, []);

    return (
        <>
            <div className="position-fixed w-100 h-100 top-0 start-0" style={{ zIndex: 2000, backgroundColor: 'rgba(0,0,0,0.75)' }}></div>
            <div className='position-fixed fw-bold top-0 end-0 col-12 col-lg-3 p-3 bg-white h-100 text-black' style={{ zIndex: 2500 }}>
                <h4 className="fw-bold w-100">SEARCH <span className="float-end cursor-pointer" onClick={hideSearch}><i className="bi bi-x"></i></span></h4><hr />
                <div className="overflow-auto">
                    <div className='w-100 d-flex'>
                        <div className='w-75'>
                            <input type="text" placeholder='Search Here ...' className='p-3 border border-1 rounded-0 w-100' onChange={handleChange} />
                        </div>
                        <div className='w-25'><button className='btn-outline-none border-0 fd-bg-primary rounded-0 py-3 px-4 text-white'><i className="bi bi-search w-100"></i></button></div>
                    </div>
                </div>
                <div className="search-list my-3">
                    {searchQuery && !loading ? (
                        products.map((product) => (
                            <Link
                                key={product.id}
                                to={"/product/" + product.id}
                                className='text-dark d-block fd-hover-bg-primary w-100 fw-bold opacity-75 p-2 border border-1'>
                                <span className='me-4'>{product.name}</span><span>${product.price}</span>
                            </Link>
                        ))
                    ) : (
                        searchQuery != "" && <Spinner />
                    )}
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
    );
};

export default ViewSearch;
