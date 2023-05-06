import { checkLogin } from '../Utils/Generals'
import { Navigate, Outlet } from 'react-router-dom'
import RoutePaths from '../config'

const RedirectIfAuthenticate = () => {

  if (checkLogin()) {
    
        return <Navigate to={RoutePaths.userAccount} replace />
    }

    return <Outlet />
}

export default RedirectIfAuthenticate