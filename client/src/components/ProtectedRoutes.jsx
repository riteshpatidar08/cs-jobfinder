import React from 'react'
import { Navigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
function ProtectedRoutes({allowedrole}) {
    const token = localStorage.getItem('token') ;
    console.log(token)

    if(!token) {
        return <Navigate to="/login"/>
    }
    
  return (
  <Outlet/>
  )
}

export default ProtectedRoutes
