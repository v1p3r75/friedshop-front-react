import { PropsWithChildren, useEffect } from "react"
import { Navigate, Outlet, useNavigate } from "react-router-dom"
import { getItem } from "../Utils/Generals"
import RoutePaths from "../config";
import { useAppDispatch } from "../hooks/redux-hooks";
import { useGetUserQuery } from "../store/apiquery/usersApiSlice";
import { setUser } from "../store/userSlice";

const PrivateRoute = ({type = 0, children} : PropsWithChildren<{type : number}>) => {
    
    const isLogged = getItem(RoutePaths.token);

    if (!isLogged) {
        return <Navigate to={RoutePaths.login} replace />;
    }

    const dispatch = useAppDispatch();
    const user = JSON.parse(getItem('user') || '');
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