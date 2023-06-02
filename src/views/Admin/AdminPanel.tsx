import React, { useEffect } from 'react'
import AdminHeader from '../../components/Admin/AdminHeader'
import AdminFooter from '../../components/Admin/AdminFooter'
import { Link, useNavigate } from 'react-router-dom'
import { removeItem, toggleLinkClass } from '../../Utils/Generals'
import RoutePaths from '../../config'
import Swal from 'sweetalert2'


const AdminPanel = ({ currentComponent }: { currentComponent: React.ReactNode }) => {

  useEffect(() => {

    document.querySelectorAll('html,body, #root').forEach((e) => e.classList.add('h-100', 'overflow-hidden'));

    return () => {
      document.querySelectorAll('html,body, #root').forEach((e) => e.classList.remove('h-100', 'overflow-hidden'));
    }
  }, [])

  const navigate = useNavigate()

  const logoutUser = (e: React.SyntheticEvent) => {
    e.preventDefault();
    Swal.fire({
      title: 'Are you sure?',
      text: "Are you sure to logout ?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Logout it!'
    }).then((r) => {
      if (r.isConfirmed) {
        removeItem(RoutePaths.token);
        removeItem('user');
        // dispatch(logoutCurrentUser)
        navigate(RoutePaths.home)
      }
    })
  }

  return (
    <>
      <div className="admin-container h-100">
        <AdminHeader />
        <div className='admin-section d-flex justify-content-between gap-4 px-5 my-4 h-75'>
          <aside className='user-page w-25 fw-bold border border-1'>
            <div><Link to={RoutePaths.admin} className={toggleLinkClass(RoutePaths.admin)}>Dashboard<i className="bi bi-house float-end"></i></Link></div>
            <div><Link to={RoutePaths.adminProducts} className={toggleLinkClass(RoutePaths.adminProducts)}>Products<i className="bi bi-newspaper float-end"></i></Link></div>
            <div><Link to={RoutePaths.adminCategories} className={toggleLinkClass(RoutePaths.adminCategories)}>Categories<i className="bi bi-bookmark float-end"></i></Link></div>
            <div><Link to={RoutePaths.adminSlides} className={toggleLinkClass(RoutePaths.adminSlides)}>Slideshow<i className="bi bi-newspaper float-end"></i></Link></div>
            <div><Link to={RoutePaths.adminCustomers} className={toggleLinkClass(RoutePaths.adminCustomers)}>Customers<i className="bi bi-people float-end"></i></Link></div>
            <div><Link to={RoutePaths.adminBlog} className={toggleLinkClass(RoutePaths.adminBlog)}>Blog<i className="bi bi-book float-end"></i></Link></div>
            <div><Link to={RoutePaths.adminAccount} className={toggleLinkClass(RoutePaths.adminAccount)}>Account<i className="bi bi-person float-end"></i></Link></div>
            <div><a href='#' className="d-block p-3 text-black" onClick={logoutUser}>Logout<i className="bi bi-person-slash float-end"></i></a></div>
          </aside>
          <div className="w-75 overflow-auto scroller">
            {currentComponent}
          </div>
        </div>
        <AdminFooter />
      </div>
    </>
  )
}

export default AdminPanel