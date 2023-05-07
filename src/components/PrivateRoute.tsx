import { PropsWithChildren, useEffect } from "react"
import { Navigate, Outlet, useNavigate } from "react-router-dom"
import { getItem } from "../Utils/Generals"
import RoutePaths from "../config";
import { useAppDispatch } from "../hooks/redux-hooks";
import { useGetUserQuery } from "../store/apiquery/usersApiSlice";
import { setUser } from "../store/userSlice";

const PrivateRoute = ({type = 0, children} : PropsWithChildren<{type : number}>) => {
    
    const isLogged = getItem(RoutePaths.token);
    const user = !isLogged ? null : JSON.parse(getItem('user') || '');

    if (!isLogged) {
        return <Navigate to={RoutePaths.login} replace />;
    }

    if (type === 1 && user.admin != 1) {

        return <Navigate to={RoutePaths.home} replace />;
    }

    const dispatch = useAppDispatch();
    const {data} = useGetUserQuery(user.id);
    
   useEffect(() => {

        if (data) {
            console.log('mounted user');
            dispatch(setUser(data.data));
        }
    }
    ,[data]);

    return <Outlet />;
}

export default PrivateRoute;