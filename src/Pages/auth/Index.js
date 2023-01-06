import React, { useContext } from 'react'
import {  Navigate, Route, Routes } from 'react-router-dom'
import { AuthContext } from '../../Context/AuthContext'
import ForgotPassword from './ForgotPassword'
import Login from './Login'
import Register from './Register'

export default function Index() {
  const {isAuthenticated}=useContext(AuthContext)
  console.log(isAuthenticated);
  return (
   <>
    <Routes>
        {/* <Route path='/login' element={<Login/>}/> */}
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/forgot-password' element={<ForgotPassword/>}/>
        <Route path='*' element={<h1 className='text-center mt-5'>No Page found</h1>}/>

    </Routes>
   
   </>
  )
}
