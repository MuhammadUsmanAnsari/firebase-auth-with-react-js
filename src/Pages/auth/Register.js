import React, { useContext, useEffect, useState } from 'react'
import { Link,  useNavigate } from 'react-router-dom'
//firebase
import {  createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import {auth} from '../../config/Firebase'
import { AuthContext } from '../../Context/AuthContext';
const initialState={
 email:"",
 password:""
}

export default function Register() {
  const [state,setState]=useState(initialState)
  const {setAuthentication}=useContext(AuthContext)
    
    //useeffect
    useEffect(()=>{
      onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          const uid = user.uid;
          setAuthentication(true)
          // ...
    } else {
      // User is signed out
      console.log("No data found");
    }
  });
  },[])
  
  const handleChange=(e)=>{
        setState({...state,[e.target.name]:e.target.value})
    }
    //signup
    const navigate= useNavigate()
const handleSubmit=(e)=>{
    e.preventDefault();
    const {email,password}=state
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      setAuthentication(true)
        const user = userCredential.user;
        console.log(userCredential);
      window.toastify("You are registered successfully","success") 
      navigate("/about")
    })
    .catch((error) => {
      const errorCode = error.code;
      window.toastify(error.message,"error")         
  });
}

  return (
    <>
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
                    <div className="bg-light mx-auto my-5 rounded-4 shadow-lg px-5 py-5 section">
                         <h1 className='text-center mb-5 title'>Sign Up</h1>
                         <form  onSubmit={handleSubmit}>

                         <div>
                            <label htmlFor="email" className="form-label fw-bold opacity-75 mt-4">Email Address</label>
                            <input type="email" className="form-control border-bottom border-2 border-dark input-fields rounded-0" id="email" name='email' onChange={handleChange}  placeholder="name@example.com"/>
                            <label htmlFor="password" className="form-label fw-bold mt-4 opacity-75">Password</label>
                            <input type="password" className="form-control border-bottom border-2 border-dark input-fields rounded-0" id="password" name='password' onChange={handleChange} placeholder='Password'/>
                         </div>
                            <div className='d-none d-md-block mt-3'>                                
                            <input type="checkbox" className='form-check-input mx-2 ' name="Remember" id="Remember"  />
                            <label htmlFor="Remember" className='hover'>Remember me</label>
                         </div>
                         <div className="text-center">                            
                            <button className="btn btn-success rounded-pill my-5 py-2 w-50 login">SIGN UP</button>
                         </div>
                         </form>
                         <div className="text-center mb-5">
                            <p>or login with another account</p>
                            <a href='https://www.facebook.com/' target="_blank" className='fs-1'><i className="fa-brands fa-facebook mx-4 "></i></a>
                            <a href='https://twitter.com/login' target="_blank" className='fs-1 text-info'><i className="fa-brands fa-twitter mx-4"></i></a>
                            <a href='https://www.google.com/' target="_blank" className='fs-1 text-danger'><i className="fa-brands fa-google mx-4"></i></a>
                         </div>
                         <div className="text-center ">
                            <p>Already have an account?</p>
                            <Link to="/auth/login" className='fw-bold fs-5 text-dark hover'>Login</Link>
                         </div>
                    </div>
                </div>
            </div>
        </div>
    

    </>
  )
}
