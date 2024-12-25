import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router";


const ProtectedRoute = ()=>{
    
    const user = useSelector((state)=>state.userslice.value)
    // const  user = true
    // console.log(user)
    return (
        user ? <Outlet /> : <Navigate to="/login"/>
    )
}

export default ProtectedRoute