import React from 'react'
import { useGetStartisticsQuery } from '../../store/apiquery/usersApiSlice'
import Spinner from '../Spinner';

const DashMain = () => {

    const { data: starts, isLoading } = useGetStartisticsQuery('api/users');

    const format = (nb : number |string, lenght : number = 2) => {
        const value = nb.toString();
        return value.padStart(lenght, "0");
    }

    return (
        <div className='dash-user pt-2'>
            <h4 className='text-dark fw-bold'>Dashboard</h4>
            {
                !isLoading ?
                    <div className="resume d-grid grid-4 gap-3 fw-bold mt-3">
                        <div className="r-card d-flex justify-content-center gap-3 border border-1 bg-secondary p-3">
                            <h1>{format(starts.data.products)}</h1>
                            <h4 className='align-self-center'>Total Products</h4>
                        </div>
                        <div className="r-card d-flex justify-content-center gap-3 border border-1 bg-secondary p-3">
                            <h1>{format(starts.data.customers)}</h1>
                            <h4 className='align-self-center'>Total Customers</h4>
                        </div>
                        <div className="r-card d-flex justify-content-center gap-3 border border-1 bg-secondary p-3">
                            <h1>{format(starts.data.products)}</h1>
                            <h4 className='align-self-center'>Popular Products</h4>
                        </div>
                        <div className="r-card d-flex justify-content-center gap-3 border border-1 bg-secondary p-3">
                            <h1>{format(starts.data.categories)}</h1>
                            <h4 className='align-self-center'>Categories</h4>
                        </div>
                        <div className="r-card d-flex justify-content-center gap-3 border border-1 bg-secondary p-3">
                            <h1>{format(starts.data.slides)}</h1>
                            <h4 className='align-self-center'>SLIDES</h4>
                        </div>
                        <div className="r-card d-flex justify-content-center gap-3 border border-1 bg-secondary p-3">
                            <h1>03</h1>
                            <h4 className='align-self-center'>Total Posts</h4>
                        </div>
                        <div className="r-card d-flex justify-content-center gap-3 border border-1 bg-secondary p-3">
                            <h1>{format(starts.data.admins)}</h1>
                            <h4 className='align-self-center'>Admins</h4>
                        </div>
                        <div className="r-card d-flex justify-content-center gap-3 border border-1 bg-secondary p-3">
                            <h1>{format(starts.data.categories)}</h1>
                            <h4 className='align-self-center'>Categories</h4>
                        </div>
                    </div> :

                    <Spinner />
            }

            <div className="user-dashboard p-3 border border-3 text-black mt-5">
                <p className="opacity-75">From your admin dashboard you can view your popular products, manage your account and others, and edit your password and account details</p>
            </div>
        </div>
    )
}

export default DashMain