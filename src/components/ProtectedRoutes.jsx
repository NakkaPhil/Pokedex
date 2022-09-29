import { useSelector } from "react-redux";
import {Navigate, Outlet } from 'react-router-dom'

const ProtectedRoutes = ()=> {
    const name = useSelector(state => state.Name)

    if(name){
        return <Outlet/>
    } else{
        return <Navigate to='/' />
    }

}

export default ProtectedRoutes;