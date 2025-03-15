import React, { useState } from 'react'
import './Login.css'
import logo from '../../assets/logo.png'
import {login,signup} from "../../firebase"
import netflix_spinner from '../../assets/netflix_spinner.gif'

function Login() {

  const [signState,setSignState]=useState("Sign In");
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [loading,setLoading]=useState(false);

  // Login.js
const user_auth = async (event) => {
  event.preventDefault();
  setLoading(true);
  if (signState === "Sign In") {
    try {
      await login(email, password);
    } catch (error) {
      console.error("Error logging in:", error);
      // Handle the error, e.g., display an error message to the user
    }
  } else {
    try {
      await signup(name, email, password);
    } catch (error) {
      console.error("Error signing up:", error);
      // Handle the error, e.g., display an error message to the user
    }
  }
  setLoading(false);
};
  return (
    loading?<div className="login-spinner">
      <img src={netflix_spinner} alt="" />
    </div>:
    <div className='login'>
     <img src={logo} className='login-logo' alt="" /> 
     <div className="login-form">
      <h1>{signState}</h1>
      <form >
        {signState==="Sign Up"?<input value={name} onChange={(e)=>{
          setName(e.target.value)
        }} type="text" placeholder='Your Name' />:<></>}
        <input type="email" value={email} onChange={(e)=>{
          setEmail(e.target.value)
        }}  placeholder='Your Email' />
        <input type="password " value={password} onChange={(e)=>{
          setPassword(e.target.value)
        }} placeholder='Your Password' />
        <button onClick={user_auth} type='submit'>{signState}</button>
        <div className="form-help">
          <div className="remember">
            <input type="checkbox" />
            <label htmlFor="">Remember Me</label>
          </div>
          <p>Need Help?</p>
        </div>
      </form>
      <div className="form-switch">
        {signState==="Sign In"?
        <p>Already have account? <span onClick={()=>{
          setSignState("Sign Up")
        }}>Sign In Now</span></p>:
        <p>New to Netflix? <span onClick={()=>{
          setSignState("Sign In")
        }}>Sign Up Now</span></p>}

        
        
      </div>
     </div>
    </div>
  )
}

export default Login
