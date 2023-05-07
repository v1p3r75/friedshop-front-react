import { checkLogin } from '../Utils/Generals'
import { Navigate, Outlet } from 'react-router-dom'
import RoutePaths from '../config'

const RedirectIfAuthenticate = () => {

  

    return <Outlet />
}

export default RedirectIfAuthenticate