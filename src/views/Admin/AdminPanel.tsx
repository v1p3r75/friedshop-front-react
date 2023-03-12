import React, { useEffect } from 'react'
import AdminHeader from '../../components/Admin/AdminHeader'
import AdminFooter from '../../components/Admin/AdminFooter'

const AdminPanel = () => {

  useEffect(() => {
    document.querySelectorAll('html,body, #root').forEach((e) => e.classList.add('h-100'));
  }, [])
    
  return (
    <>
      <div className="admin-container h-100">
        <AdminHeader />
        <div className='admin-section d-flex justify-content-between gap-3 px-5 my-5 h-75'>
              <aside className='user-page w-25 fw-bold border border-1'>
                  <div><a href='#' className="d-block p-3 text-black">Dashboard<i className="bi bi-house float-end"></i></a></div>
                  <div><a href='#' className="d-block p-3 text-black">Product<i className="bi bi-newspaper float-end"></i></a></div>
                  <div><a href='#' className="d-block p-3 text-black">Customers<i className="bi bi-people float-end"></i></a></div>
                  <div><a href='#' className="d-block p-3 text-black">Categories<i className="bi bi-bookmark float-end"></i></a></div>
                  <div><a href='#' className="d-block p-3 text-black">Promotions<i className="bi bi-flower1 float-end"></i></a></div>
                  <div><a href='#' className="d-block p-3 text-black">Blog<i className="bi bi-book float-end"></i></a></div>
                  <div><a href='#' className="d-block p-3 text-black">Account<i className="bi bi-person float-end"></i></a></div>
              </aside>
              <div className="w-75 mt-3"></div>
          </div>
        <AdminFooter />
      </div>
    </>
  )
}

export default AdminPanel