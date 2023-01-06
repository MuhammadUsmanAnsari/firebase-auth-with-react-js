import React, { useState ,useEffect, useContext} from 'react'
import { Link } from 'react-router-dom'
//use context
import { AuthContext } from '../../Context/AuthContext';
//firebase
import {auth} from '../../config/Firebase'
import {  onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
const initialState={
 email:"",
 password:""
}
export default function Login() {   
  const {setAuthentication}=useContext(AuthContext)
  const [state,setState]=useState(initialState)          
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

//login function    
const handleSubmit=(e)=>{
  e.preventDefault();
  const {email,password}=state
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
      setAuthentication(true)
        const user = userCredential.user;
        window.toastify("Login successfully","success")
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        window.toastify(error.message,"error")
      });      
    }
    return (
    <>        
        <div className="container">
        <div className="row">
                  <div className="col-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3 ">
                  <div className="bg-light mx-auto my-5  rounded-4 shadow-lg px-5 py-5 section">                         
                  <h1 className='text-center mb-5 title'>Login</h1>
                  <form onSubmit={handleSubmit} >
                  <div>                            
                  <label htmlFor="email" className="form-label fw-bold opacity-75">Email Address</label>
                  <input type="email" className="form-control border-bottom border-2 border-dark input-fields rounded-0" name='email' onChange={handleChange}  id="email" placeholder="name@example.com"/>
                  <label htmlFor="password" className="form-label fw-bold mt-4 opacity-75">Password</label>
                         <input type="password" className="form-control border-bottom border-2 border-dark input-fields rounded-0" name='password' onChange={handleChange} id="password" placeholder='Password'/>
                     </div>
                     <div className="d-flex justify-content-between mt-3 px-2">
                         <Link to="/auth/forgot-password" className='text-dark text-decoration-none hover'>Forgot Password?</Link>
                         <div className='d-none d-md-block'>                                
                         <input type="checkbox" className='form-check-input mx-2 ' name="Remember" id="Remember"  />
                         <label htmlFor="Remember" className='hover'>Remember me</label>
                         </div>
                         </div>
                         <div className="text-center">                            
                         <button className="btn btn-success rounded-pill my-5 py-2 w-50 login">LOGIN</button>
                         </div>                            
                         <div className="text-center ">
                         <p>Don't have account? <Link to="/auth/register" className='fw-bold mx-1 text-dark hover'>Sign Up</Link></p>                                
                     </div>
                     </form>
                     </div>
            </div>                                      
        </div>
    </div>
                  
    </>
  )
}
