import React from 'react'
import { Link } from 'react-router-dom'
import RoutePaths from '../../config'

const AdminHeader = () => {
    return (
        <div className="header bg-white text-black shadow d-flex justify-content-between px-5 py-2">
            <div className="img align-self-center"><Link to={"/admin"}><img src="/img/logo.png" alt="" /></Link></div>
            <div className="welcome-msg align-self-center">
                <h5 className="fw-bold opacity-75">Welcome To Admin Dashboard</h5>
            </div>
            <div className="navigation font-regular d-flex flex-wrap justify-content-between py-4">
                <div className="d-flex gap-2 align-self-center">
                    <div><a href='#' className="position-relative border-3 shadow border-light py-2 px-3 text-dark fd-hover-bg-primary"><i className="bi bi-bell"></i><span className="position-absolute top-0">2</span></a></div>
                    <div><Link to="#" className="position-relative border-3 shadow border-light py-2 px-3 text-dark fd-hover-bg-primary"><i className="bi bi-messenger"></i><span className="position-absolute top-0">3</span></Link></div>
                    <div><Link to={RoutePaths.adminAccount} className="position-relative border-3 shadow border-light py-2 px-3 text-dark fd-hover-bg-primary"><i className="bi bi-person"></i></Link></div>
                </div>
            </div>
        </div>
    )
}

export default AdminHeader