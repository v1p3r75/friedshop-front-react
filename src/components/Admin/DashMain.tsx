import React from 'react'

const DashMain = () => {
    return (
        <div className='dash-user pt-2'>
            <h4 className='text-dark fw-bold'>Dashboard</h4>
            <div className="resume d-grid grid-4 gap-3 fw-bold mt-3">
                <div className="r-card d-flex justify-content-center gap-3 border border-1 bg-secondary p-3">
                    <h1>{25}</h1>
                    <h4 className='align-self-center'>Total Products</h4>
                </div>
                <div className="r-card d-flex justify-content-center gap-3 border border-1 bg-secondary p-3">
                    <h1>{20}</h1>
                    <h4 className='align-self-center'>Total Customers</h4>
                </div>
                <div className="r-card d-flex justify-content-center gap-3 border border-1 bg-secondary p-3">
                    <h1>{125}</h1>
                    <h4 className='align-self-center'>Popular Products</h4>
                </div>
                <div className="r-card d-flex justify-content-center gap-3 border border-1 bg-secondary p-3">
                    <h1>{54}</h1>
                    <h4 className='align-self-center'>Categories</h4>
                </div>
                <div className="r-card d-flex justify-content-center gap-3 border border-1 bg-secondary p-3">
                    <h1>05</h1>
                    <h4 className='align-self-center'>SLIDES</h4>
                </div>
                <div className="r-card d-flex justify-content-center gap-3 border border-1 bg-secondary p-3">
                    <h1>{20}</h1>
                    <h4 className='align-self-center'>Total Posts</h4>
                </div>
                <div className="r-card d-flex justify-content-center gap-3 border border-1 bg-secondary p-3">
                    <h1>03</h1>
                    <h4 className='align-self-center'>Admins</h4>
                </div>
                <div className="r-card d-flex justify-content-center gap-3 border border-1 bg-secondary p-3">
                    <h1>11</h1>
                    <h4 className='align-self-center'>Categories</h4>
                </div>
            </div>

            <div className="user-dashboard p-3 border border-3 text-black mt-5">
                <p className="opacity-75">From your admin dashboard you can view your popular products, manage your account and others, and edit your password and account details</p>
            </div>
        </div>
    )
}

export default DashMain