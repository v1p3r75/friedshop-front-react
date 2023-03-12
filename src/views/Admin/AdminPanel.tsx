import React, { useEffect } from 'react'
import AdminHeader from '../../components/Admin/AdminHeader'
import AdminFooter from '../../components/Admin/AdminFooter'
import { Link, useLocation } from 'react-router-dom'

const AdminPanel = ({currentComponent} : {currentComponent : React.ReactNode}) => {

  const navigation = useLocation();
  const path = navigation.pathname;
  const activeClass = "d-block p-3 fd-nav-active";
  const inactiveClass = "d-block p-3 text-black";

  useEffect(() => {
    document.querySelectorAll('html,body, #root').forEach((e) => e.classList.add('h-100'));
  }, [])
    
  return (
    <>
      <div className="admin-container h-100">
        <AdminHeader />
        <div className='admin-section d-flex justify-content-between gap-3 px-5 my-5 h-75'>
              <aside className='user-page w-25 fw-bold border border-1'>
                  <div><Link to={'/admin/'} className={path == '/admin/' || path == '/admin' ? activeClass : inactiveClass}>Dashboard<i className="bi bi-house float-end"></i></Link></div>
                  <div><Link to={'/admin/products'} className={path == '/admin/products/' || path == '/admin/products' ? activeClass : inactiveClass}>Product<i className="bi bi-newspaper float-end"></i></Link></div>
                  <div><Link to={'/admin/customers'} className={path == '/admin/customers/' || path == '/admin/customers' ? activeClass : inactiveClass}>Customers<i className="bi bi-people float-end"></i></Link></div>
                  <div><Link to={'/admin/'} className={path == '/admin/categories/' || path == '/admin/categories' ? activeClass : inactiveClass}>Categories<i className="bi bi-bookmark float-end"></i></Link></div>
                  <div><Link to={'/admin/'} className={path == '/admin/promotions/' || path == '/admin/promotion' ? activeClass : inactiveClass}>Promotions<i className="bi bi-flower1 float-end"></i></Link></div>
                  <div><Link to={'/admin/'} className={path == '/admin/blogs/' || path == '/admin/blog' ? activeClass : inactiveClass}>Blog<i className="bi bi-book float-end"></i></Link></div>
                  <div><Link to={'/admin/'} className={path == '/admin/accounts/' || path == '/admin/accounts' ? activeClass : inactiveClass}>Account<i className="bi bi-person float-end"></i></Link></div>
              </aside>
              <div className="w-75">
                {currentComponent}
              </div>
          </div>
        <AdminFooter />
      </div>
    </>
  )
}

export default AdminPanel