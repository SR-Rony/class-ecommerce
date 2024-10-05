import { lazy } from "react";

const Login = lazy(()=>import("../../views/auth/Login"))
const Registation = lazy(()=>import("../../views/auth/Registation"))
const AdminLogin = lazy(()=>import("../../views/auth/AdminLogin"))


const publicRoute = [
    {
        path: "/login",
        element: <Login/>
    },
    {
        path: "/registation",
        element: <Registation/>
    },
    {
        path: "/admin-login",
        element: <AdminLogin/>
    }
]

export default publicRoute