<<<<<<< HEAD
import React, { useEffect, Suspense  } from 'react'
import Home from './Pages/Home/Home';
=======
import React, { useEffect } from 'react'
>>>>>>> 5a2437b008305c1adb8d863c014b5babdb92e855
import Home from './Pages/Home/Home'
import{Routes,Route, useNavigate} from 'react-router-dom' 
import Login from './pages/Login/Login'
import Player from './Pages/Player/Player'
import { onAuthStateChanged } from 'firebase/auth'
import {auth} from './firebase'
import { ToastContainer, toast } from 'react-toastify';

function App() {
 const navigate=useNavigate();
  useEffect(()=>{
    onAuthStateChanged(auth,async(user)=>{
      if(user){
        console.log("Logged In");
        navigate('/');
      }
      else{
        console.log("Logged Out");
        navigate('/login');
      }
    })

  },[])
  return (
<<<<<<< HEAD
    <Suspense fallback={<div>Loading...</div>}>

 
=======
>>>>>>> 5a2437b008305c1adb8d863c014b5babdb92e855
    <div>
      <ToastContainer theme='dark' />
      <Routes>
        
          <Route path="/" element={<Home/>} />
          <Route path='/login' element={<Login/>}/>
          <Route path='/player/:id' element={<Player/>}/>
        
      </Routes>
      
    </div>
<<<<<<< HEAD
    </Suspense>
=======
>>>>>>> 5a2437b008305c1adb8d863c014b5babdb92e855
  )
}

export default App
