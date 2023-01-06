import React, { useContext } from 'react'
import { AuthContext } from '../Context/AuthContext'
import Login from '../Pages/auth/Login'

export default function PrivateRoute(props) {
  const {isAuthenticated,setAuthentication}=useContext(AuthContext)
  const {Component}=props
  if (!isAuthenticated) 
    return <>
     <h4 className="text-center text-danger mt-3 mb-0">Please Login first if you wanna see this page.</h4>
     <Login/>
    </> 
  return (
        <Component/>
  )
}
