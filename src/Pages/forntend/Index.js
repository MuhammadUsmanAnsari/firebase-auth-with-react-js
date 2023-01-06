import React from 'react'
import { Routes,Route } from 'react-router-dom'
import PrivateRoute from '../../important/PrivateRoute'
import About from './About'
import Contact from './Contact'
import Home from './Home'

export default function Index() {
  return (
    <>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<PrivateRoute Component={About}/> }/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='*' element={<h1 className='text-center mt-5'>No Page found</h1>}/>
        </Routes>
    
    </>
  )
}
