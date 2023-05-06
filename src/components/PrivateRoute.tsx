import { PropsWithChildren, useLayoutEffect } from "react"
import { Navigate, Outlet, useNavigate } from "react-router-dom"
import { getItem } from "../Utils/Generals"
import RoutePaths from "../config";

const PrivateRoute = ({type = 0, children} : PropsWithChildren<{type : number}>) => {
    
    const isLogged = getItem(RoutePaths.token);

    if (!isLogged) {
        return <Navigate to={RoutePaths.login} replace />;
    }
    
    return <Outlet />;
}

export default PrivateRoute;