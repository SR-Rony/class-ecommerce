import { lazy } from "react";

const Login = lazy(()=>import("../../views/auth/Login"))
const Registation = lazy(()=>import("../../views/auth/Registation"))


const publicRoute = [
    {
        path: "/login",
        element: <Login/>
    },
    {
        path: "/registation",
        element: <Registation/>
    }
]

export default publicRoute