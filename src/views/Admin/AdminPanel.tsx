import React, { useEffect } from 'react'
import AdminHeader from '../../components/Admin/AdminHeader'
import AdminFooter from '../../components/Admin/AdminFooter'
import { Link, useLocation } from 'react-router-dom'
import { toggleLinkClass } from '../../Utils/Generals'
import RoutePaths from '../../config'


const AdminPanel = ({currentComponent} : {currentComponent : React.ReactNode}) => {

  const navigation = useLocation();
  const path = navigation.pathname;

  useEffect(() => {
    document.querySelectorAll('html,body, #root').forEach((e) => e.classList.add('h-100'));
  }, [])

    
  return (
    <>
      <div className="admin-container h-100">
        <AdminHeader />
        <div className='admin-section d-flex justify-content-between gap-3 px-5 my-5 h-75'>
              <aside className='user-page w-25 fw-bold border border-1'>
                  <div><Link to={RoutePaths.admin.path} className={toggleLinkClass(RoutePaths.admin.path)}>Dashboard<i className="bi bi-house float-end"></i></Link></div>
                  <div><Link to={RoutePaths.adminProducts.path}  className={toggleLinkClass(RoutePaths.adminProducts.path)}>Products<i className="bi bi-newspaper float-end"></i></Link></div>
                  <div><Link to={RoutePaths.admin.path}  className={toggleLinkClass('/admin/customers')}>Customers<i className="bi bi-people float-end"></i></Link></div>
                  <div><Link to={RoutePaths.admin.path}  className={toggleLinkClass('/admin/categories')}>Categories<i className="bi bi-bookmark float-end"></i></Link></div>
                  <div><Link to={RoutePaths.admin.path}  className={toggleLinkClass('/admin/promotions')}>Promotions<i className="bi bi-flower1 float-end"></i></Link></div>
                  <div><Link to={RoutePaths.admin.path}  className={toggleLinkClass('/admin/blog')}>Blog<i className="bi bi-book float-end"></i></Link></div>
                  <div><Link to={RoutePaths.admin.path}  className={toggleLinkClass('/admin/accounts')}>Account<i className="bi bi-person float-end"></i></Link></div>
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