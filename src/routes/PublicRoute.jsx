
import { Navigate, useRoutes } from "react-router-dom"
import Login from "../pages/Auth/Login"
import Signup from "../pages/Auth/Signup";
import ForgotPassword from "../pages/Auth/ForgotPassword";
import ResetPassword from "../pages/Auth/ResetPassword";


const PublicRoute=()=>{
    return useRoutes([
        {
            path:"*",element:<Navigate to ="/login"/>
        },
        {
            path:"/login",element:<Login/>
        },

        {
            path:"/signup",element:<Signup/>
        },
       
        {
            path:"/forgotpassword",element:<ForgotPassword/>
        },
       
        {
            path:"/resetpassword",element:<ResetPassword/>
        },
    ]);
}
export default PublicRoute;