import React, { useContext } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Header from '../components/Header/Header'
import FrontEnd from '../Pages/forntend/Index'
import Auth from '../Pages/auth/Index'
import { AuthContext } from '../Context/AuthContext'
export default function Routing() {
  const {isAuthenticated,setAuthentication}=useContext(AuthContext)
  console.log(isAuthenticated);
  return (
    <>
        <BrowserRouter>
        <main>            
            <Header/>
              <Routes>
                <Route path='/*' element={<FrontEnd/>}/>
                <Route path='/auth*' element={isAuthenticated==false?<Auth/>:<Navigate to="/about"/>}/>

              </Routes>
        </main>
        </BrowserRouter>
    
    
    
    </>
  )
}
