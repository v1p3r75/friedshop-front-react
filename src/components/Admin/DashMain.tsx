import React from 'react'

const DashMain = () => {
    return (
        <div className="resume d-grid grid-4 gap-3 fw-bold">
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
        </div>
    )
}

export default DashMain