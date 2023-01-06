import React, { useState ,useEffect, useContext} from 'react'
import { Link } from 'react-router-dom'
//firebase
import {  sendPasswordResetEmail,onAuthStateChanged } from "firebase/auth";
import {auth} from '../../config/Firebase'
import { AuthContext } from '../../Context/AuthContext';
const initialState={
 email:"",
}
export default function ForgotPassword() {   
    const [state,setState]=useState(initialState)        
    const [user,setUser]=useState({})        
    const {setAuthentication}=useContext(AuthContext)
    //on auth change
useEffect(()=>{
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      setUser(user)
      setAuthentication(true)
          // ...
        } else {
          // User is signed out
          console.log("No data found");
        }
      });
},[])    
//getting data from input fields    
const handleChange=(e)=>{
        setState({...state,[e.target.name]:e.target.value})
    }
//login function    
const handleSubmit=(e)=>{
    e.preventDefault();
    const {email}=state
    // console.log(email);
    sendPasswordResetEmail(auth, email)
  .then(() => {
    window.toastify("Reset link is sent. Check inbox","success")
  })
  .catch((error) => {
    window.toastify(error.message,"error")
  });

}
    return (
   <>
    <div className="container">
            <div className="row">
                <div className="col-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
                    <div className="bg-light mx-auto my-5 rounded-4 shadow-lg px-5 py-5 section">
                         <h1 className='text-center mb-5 title'>Forgot Password</h1>
                         <form onSubmit={handleSubmit}>
                         <div>                            
                            <label for="email" className="form-label fw-bold opacity-75" >Email Address</label>
                            <input type="email" className="form-control border-bottom border-2 border-dark input-fields rounded-0" onChange={handleChange} name="email" id="email" placeholder="name@example.com"/>                            
                         </div>
                         <div className=" mt-3 px-2">
                            <input type="checkbox" className='form-check-input mx-2 ' name="Remember" id="Remember"  />
                            <label htmlFor="Remember" className='hover'>Remember me</label>
                         </div>
                         <div className="text-center">                            
                            <button className="btn btn-success rounded-pill my-5 py-2 w-50 login">Reset Password</button>                                                        
                         </div>
                            </form>
                         <div className="text-center mb-5">
                            <p>or login with another account</p>
                            <a href='https://www.facebook.com/' target="_blank" className='fs-1'><i className="fa-brands fa-facebook mx-4 "></i></a>
                            <a href='https://twitter.com/login' target="_blank" className='fs-1 text-info'><i className="fa-brands fa-twitter mx-4"></i></a>
                            <a href='https://www.google.com/' target="_blank" className='fs-1 text-danger'><i className="fa-brands fa-google mx-4"></i></a>
                         </div>
                         <div className="text-center ">
                            <Link to="/auth/login" className='fw-bold fs-5 text-dark hover'>Login</Link>
                         </div>
                    </div>
                </div>
            </div>
        </div>
    
   </>
  )
}
