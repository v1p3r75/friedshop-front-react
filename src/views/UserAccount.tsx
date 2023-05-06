import {useEffect } from 'react'
import Header from './includes/Header'
import Footer from './includes/Footer'
import { Link, useNavigate } from 'react-router-dom'
import RoutePaths from '../config'
import { toggleLinkClass, getItem, User } from '../Utils/Generals'
import PrivateRoute from "../components/PrivateRoute"
import { useGetUserQuery } from '../store/apiquery/usersApiSlice'
import Spinner from '../components/Spinner'
import { useAppDispatch, useAppSelector } from '../hooks/redux-hooks'
import { setUser } from '../store/userSlice'

export const UserDashboard = () => {
    return (
        <div className="user-dashboard p-3 border border-2 text-black">
            <h3>Dashboard</h3>
            <p className="opacity-75">From your account dashboard you can view your recent orders, manage your shipping and billing addresses, and edit your password and account details</p>
        </div>
    )
}

export const UserOrders = () => {
    return (
        <div className="user-orders p-3 border border-2 text-black">
            <h3>Orders</h3>
            <div className="table-responsive">
                <table className="table table-default table-bordered text-center">
                    <thead>
                        <tr>
                            <th scope="col">Commande</th>
                            <th scope="col">Date</th>
                            <th scope="col">Status</th>
                            <th scope="col">Total</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="">
                            <td scope="row">1</td>
                            <td>01 Dec 2023</td>
                            <td>R1C3</td>
                            <td>$250</td>
                            <td><a href="#" className='text-info'>Voir</a></td>
                        </tr>
                        <tr>
                            <td scope="row">2</td>
                            <td>01 Dec 2023</td>
                            <td>R1C3</td>
                            <td>$250</td>
                            <td><a href="#" className='text-info'>Voir</a></td>
                        </tr>
                        <tr>
                            <td scope="row">3</td>
                            <td>01 Dec 2023</td>
                            <td>R1C3</td>
                            <td>$250</td>
                            <td><a href="#" className='text-info'>Voir</a></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            
        </div>
    )
}

export const UserAddress = () => {

    const user : User = useAppSelector(state => state.user);

    return (
        <div className="user-address p-3 border border-2 text-black">
            <h3>Billing Address</h3>
            <div className="opacity-75">
                <h6>{user.address}</h6>
                <h6><span className="fw-bold">Mobile:</span>(229) {user.phone}</h6>
            </div>
        </div>
    )
}

export const UserDetails = () => {

    const user : User = useAppSelector(state => state.user);

    return (
        <div className="user-edit-details p-3 border border-2 text-black">
            <h3>Account Details</h3>
            <form action="" method="post" className="checkout-service p-3">
                    <div className='d-flex gap-2'>
                        <label className='w-50'>
                            <span>First Name</span>
                            <input type="text" name="firstname" className="form-control w-100 rounded-0 p-2" value={user.firstname}/>
                        </label>
                        <label className='w-50'>
                            <span>Last Name</span>
                            <input type="text" name="lastname" className="form-control w-100 rounded-0 p-2" value={user.lastname}/>
                        </label>
                    </div>
                    <div className='my-4'>
                        <label className='w-100'>
                            <span>Email</span>
                            <input type="email" name="email" className="form-control w-100 rounded-0 p-2" value={user.email}/>
                        </label>
                    </div>
                    <div>
                        <label className='w-100'>
                            <span>Address</span>
                            <input type="text" name="firstname" className="form-control w-100 rounded-0 p-2" value={user.address}/>
                        </label>
                    </div>
                    <div className='my-4'>
                        <label className='w-100'>
                            <span>Password</span>
                            <input type="password" name="password" className="form-control w-100 rounded-0 p-2" value='Password'/>
                        </label>
                    </div>
                    <div>
                        <label className='w-100'>
                            <span>Confirm Password</span>
                            <input type="password" name="confirm_password" className="form-control w-100 rounded-0 p-2" value='Confirm Password'/>
                        </label>
                    </div>
                    <div className='mt-4'><a href="#" className="fd-btn w-25 text-center">SAVE NOW</a></div>
                </form>
        </div>
    )
}

const UserAccount = ({currentComponent = <UserDashboard />} : {currentComponent? : React.ReactNode}) => {
    
    const dispatch = useAppDispatch();
    const user = JSON.parse(getItem('user') || '');
    const {data, isError, isFetching} = useGetUserQuery(user.id);
    
    useEffect(() => {

        data && dispatch(setUser(data.data));
    }, [data])

    return (
    <>
        <Header />
        <div className='d-flex justify-content-between gap-3 px-5 my-5'>
            <aside className='user-page w-25 fw-bold border border-1 h-25'>
                <div><Link to={RoutePaths.userAccount} className={toggleLinkClass(RoutePaths.userAccount)}>Dashboard<i className="bi bi-house float-end"></i></Link></div>
                <div><Link to={RoutePaths.userOrders} className={toggleLinkClass(RoutePaths.userOrders)}>Orders<i className="bi bi-bookmark-fill float-end"></i></Link></div>
                <div><Link to={RoutePaths.userAdress} className={toggleLinkClass(RoutePaths.userAdress)}>Address<i className="bi bi-envelope float-end"></i></Link></div>
                <div><Link to={RoutePaths.userDetails} className={toggleLinkClass(RoutePaths.userDetails)}>Account Details<i className="bi bi-person float-end"></i></Link></div>
                <div><a href='#' className="d-block p-3 text-black">Logout<i className="bi bi-person-slash float-end"></i></a></div>
            </aside>
            {
                !isFetching && !isError ? <div className="w-75 mt-3">{currentComponent}</div> :
                <Spinner />
            }
        </div>
        <Footer/>
    </>
  )
}

export default UserAccount