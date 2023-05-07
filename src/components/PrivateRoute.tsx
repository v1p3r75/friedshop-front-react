import { PropsWithChildren, useEffect } from "react"
import { Navigate, Outlet } from "react-router-dom"
import { getItem } from "../Utils/Generals"
import RoutePaths from "../config";

const PrivateRoute = ({type = 0, children} : PropsWithChildren<{type : number}>) => {
    
    const isLogged = getItem(RoutePaths.token);
    const user = !isLogged ? null : JSON.parse(getItem('user') || '');

    if (!isLogged) {
        return <Navigate to={RoutePaths.login} replace />;
    }

    if (type === 1 && user.admin != 1) {

        return <Navigate to={RoutePaths.home} replace />;
    }

    return <Outlet />;
}

export default PrivateRoute;