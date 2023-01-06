import { onAuthStateChanged, sendEmailVerification, signOut } from 'firebase/auth';
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { auth } from '../../config/Firebase';
import {AuthContext} from '../../Context/AuthContext'
export default function About() {
  const [user,setUser]=useState({})        
  const {setAuthentication}=useContext(AuthContext)
const [isLoading,setLoading]=useState(true)
  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
    setUser(user)
    setLoading(false)
    // ...
  } else {
    // User is signed out
    console.log("No data found");
  }
});
},[])
//handle signout
const navigate=useNavigate()
    const handleSignOut=()=>{
      setAuthentication(false)
      navigate("/")
      signOut(auth)
      .then(()=>{
        setUser({})
        window.toastify("Logout Successfully","success")
      })
      .catch((error)=>{
    window.toastify(error.message,"error")
  })
}
//verify email
const emailVerify=()=>{
  // const user=auth.currentUser
  // updateProfile(user, {
  //   displayName: "Muhammad Usman",
  // }).then(() => {
  //   window.toastify("Please Check Your email inbox","info") 
  
  // }).catch((error) => {
    //   window.toastify(error.message,"error")
    // });
    //verify your email
    sendEmailVerification(auth.currentUser)
    .then(()=>{
      console.log(auth.currentUser);
      window.toastify("Email sent. Check Your email inbox","success") 
    })
    .catch((error)=>{
      window.toastify(error.message,"error")
  })
} 
  return (
    <>
    {isLoading
    ?<div className="container-fluid">
          <div className="spinner-border"></div>
          <div className='text-white mt-4'>Loading...</div>
        </div>
        :
    <div className="container">
      <div className="col-12 text-center ">
        <h5 className='mt-5'>Your Email is: <span className='text-danger'>{user.email}</span></h5>
        <h5 className='mt-5'>Your UID is: <span className='text-danger'>{user.uid}</span></h5>
        <button className="btn btn-success rounded-pill mt-5 py-2 w-25 login" onClick={handleSignOut}>Logout</button><br />
        <button className="btn btn-success rounded-pill mt-2 py-2 w-25 login" onClick={emailVerify}>Verify your email</button>
      </div>
    </div>
}
    </>
  )
}
