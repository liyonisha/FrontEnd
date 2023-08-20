
import { useRoutes } from "react-router-dom"
import Login from "../pages/Auth/Login"

const PublicRoute=()=>{
    return useRoutes([
        {
            path:"*",element:<Login/>
        },
        {
            path:"/login",element:<Login/>
        },
    ]);
}
export default PublicRoute;