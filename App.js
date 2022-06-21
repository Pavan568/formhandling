import React, { useEffect, useState } from 'react'
import Auth from './Auth'
import About from './About'


import './auth.css'
import {getAuth} from 'firebase/auth'
function App() {
  const [presentuser,setpresentuser] = useState(null)
  const auth = getAuth();
const user = auth.currentUser;
  useEffect(()=>{
  
   auth.onAuthStateChanged(user =>{
   
    if (user) {
     setpresentuser(user )
    }else{
      setpresentuser(null)
    }
    
   }
    )
  },[])
  return (
    
  <div>
      {presentuser ? < About presentuser={presentuser}/> : <Auth /> }
  </div>
  
  
   
  );
}

export default App;
