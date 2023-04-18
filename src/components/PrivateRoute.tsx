import { PropsWithChildren, useLayoutEffect } from "react"
import { useNavigate } from "react-router-dom"

const PrivateRoute = ({type = 0, children} : PropsWithChildren<{type : number}>) => {
    
    const isLogged = false;
    const navigate = useNavigate()

    useLayoutEffect(() => {
        if (!isLogged) {
            navigate('/login');
        }
    })
    
    return children
}

export default PrivateRoute;