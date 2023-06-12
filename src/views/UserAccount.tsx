import { useState, useEffect, SyntheticEvent } from 'react'
import Header from './includes/Header'
import Footer from './includes/Footer'
import { Link, useNavigate } from 'react-router-dom'
import RoutePaths from '../config'
import { toggleLinkClass, User, removeItem } from '../Utils/Generals'
import { useUpdateUserMutation } from '../store/apiquery/usersApiSlice'
import Spinner from '../components/Spinner'
import { useAppDispatch, useAppSelector } from '../hooks/redux-hooks'
import LoadingButton from '../components/LoadingButton'
import { HandleResult } from '../components/HandleResult'
import Swal from 'sweetalert2'
import { useGetCommandQuery } from '../store/apiquery/CommandApiSlice'
import { connect } from 'react-redux'

export const UserDashboard = () => {
    return (
        <div className="user-dashboard p-3 border border-2 text-black">
            <h3>Dashboard</h3>
            <p className="opacity-75">From your account dashboard you can view your recent orders, manage your shipping and billing addresses, and edit your password and account details</p>
        </div>
    )
}

export const UserOrders = () => {

    const user: User = useAppSelector(state => state.user);
    // let content: React.ReactHTMLElement<HTMLElement> = <></>;
    const { data: commands, isLoading } = useGetCommandQuery(user.id);

    // useEffect(() => {

    //     commands ? commands.data.map((command: any) => {
    //         content = command
    //     }) : null;

    // }, [commands])

    return (
        <div className="user-orders p-3 border border-2 text-black">
            <h3>Orders</h3>
            <div className="table-responsive">
                {
                    !isLoading ?
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
                                {
                                    isLoading ? <Spinner /> :
                                    JSON.stringify(commands.data)
                                }
                            </tbody>
                        </table> :

                        <Spinner />
                }
            </div>

        </div>
    )
}

export const UserAddress = () => {

    const user: User = useAppSelector(state => state.user);

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

    const user: User = useAppSelector(state => state.user);
    const [data, setData] = useState(user);
    const [updateUser, result] = useUpdateUserMutation();

    const handleChange = (e: SyntheticEvent) => {

        const target = e.target as HTMLInputElement
        setData({ ...data, [target.name]: target.value });
    }

    const handleSubmit = (e: SyntheticEvent) => {

        e.preventDefault();
        updateUser(data);
    }


    return (
        <div className="user-edit-details p-3 border border-2 text-black">
            <h3>Account Details</h3>
            <form action="" method="post" className="checkout-service p-3" onSubmit={handleSubmit}>
                <div className='d-flex gap-2'>
                    <label className='w-50'>
                        <span>First Name</span>
                        <input type="text" name="firstname" className="form-control w-100 rounded-0 p-2" value={data.firstname} onChange={handleChange} />
                    </label>
                    <label className='w-50'>
                        <span>Last Name</span>
                        <input type="text" name="lastname" className="form-control w-100 rounded-0 p-2" value={data.lastname} onChange={handleChange} />
                    </label>
                </div>
                <div className='my-4'>
                    <label className='w-100'>
                        <span>Email</span>
                        <input type="email" name="email" className="form-control w-100 rounded-0 p-2" value={data.email} onChange={handleChange} />
                    </label>
                </div>
                <div>
                    <label className='w-100'>
                        <span>Address</span>
                        <input type="text" name="address" className="form-control w-100 rounded-0 p-2" value={data.address} onChange={handleChange} />
                    </label>
                </div>
                <div className='my-4'>
                    <label className='w-100'>
                        <span>Password</span>
                        <input type="password" name="password" className="form-control w-100 rounded-0 p-2" value={user.password} onChange={handleChange} />
                    </label>
                </div>
                <div className='my-4'>
                    <HandleResult result={result} />
                </div>
                <LoadingButton loadingState={result.isLoading}>
                    <div className='mt-4'><button type="submit" className="fd-btn border-0 w-100 text-center">SAVE NOW</button></div>
                </LoadingButton>

            </form>
        </div>
    )
}

const UserAccount = ({ currentComponent = <UserDashboard /> }: { currentComponent?: React.ReactNode }) => {

    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const logoutUser = (e: SyntheticEvent) => {
        e.preventDefault();
        Swal.fire({
            title: 'Are you sure?',
            text: "Are you sure to delete this product ?",
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
            <Header />
            <div className='row justify-content-between gap-3 px-3 px-lg-5 my-5 w-100'>
                <aside className='user-page col-12 col-lg-3 fw-bold border border-1 h-25'>
                    <div><Link to={RoutePaths.userAccount} className={toggleLinkClass(RoutePaths.userAccount)}>Dashboard<i className="bi bi-house float-end"></i></Link></div>
                    <div><Link to={RoutePaths.userOrders} className={toggleLinkClass(RoutePaths.userOrders)}>Orders<i className="bi bi-bookmark-fill float-end"></i></Link></div>
                    <div><Link to={RoutePaths.userAdress} className={toggleLinkClass(RoutePaths.userAdress)}>Address<i className="bi bi-envelope float-end"></i></Link></div>
                    <div><Link to={RoutePaths.userDetails} className={toggleLinkClass(RoutePaths.userDetails)}>Account Details<i className="bi bi-person float-end"></i></Link></div>
                    <div><a href='#' className="d-block p-3 text-black" onClick={logoutUser}>Logout<i className="bi bi-person-slash float-end"></i></a></div>
                </aside>
                <div className="col-12 col-lg-8 mt-3">{currentComponent}</div>
                {/* // !isFetching && !isError ? <div className="w-75 mt-3">{currentComponent}</div> :
                // <Spinner /> */}
            </div>
            <Footer />
        </>
    )
}

export default UserAccount