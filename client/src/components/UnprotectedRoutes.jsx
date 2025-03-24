import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

function UnprotectedRoutes() {
    const token = localStorage.getItem('token')
console.log(token)
    if(token) {
        return <Navigate to='/' />
    }
  return (
   
    <Outlet/>
    
  )
}

export default UnprotectedRoutes
