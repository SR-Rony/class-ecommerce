import { lazy } from "react";

const Home = lazy(()=>import("../../views/pages/Home"))


const ProtectedRoute = [
    {
        path: "/",
        element: <Home/>
    }
]

export default ProtectedRoute