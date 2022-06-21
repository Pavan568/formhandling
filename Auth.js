import React, { useEffect, useId, useState } from 'react'


import { auth } from './firebase'

import { signInWithEmailAndPassword, updateProfile,createUserWithEmailAndPassword} from 'firebase/auth'
const Auth = () => {
  
   const intialdata = {
      email:'',
      password:'',
      firstname:'',
      lastname:'',
      confirmpassword:''
   }
   
   const[data,setdata] = useState(intialdata)
   const {email,password,confirmpassword,firstname,lastname} = data
   const[errors,seterrors] = useState({})
   const[submit,setsubmit] = useState(false)
   const[signup,setsignup] = useState(false)
   const changeHandler = e =>{
      setdata({...data,[e.target.name]:e.target.value})
     
   }
   
  const submithandle = e =>{
   e.preventDefault();
   seterrors(validate(data))
   setsubmit(true)
   if(Object.keys(errors).length === 0 && submit){
      console.log(data)
   }

  }
  const login = e =>{
   e.preventDefault()
   signInWithEmailAndPassword(auth,email,password)
   .then((usercredentials) =>{
      const user = usercredentials.user;
        
   })
   .catch((err) =>{
      if(err) {
         alert('details not found')
      }
     
   })
   seterrors(validate(data))
   setsubmit(true)
   if(Object.keys(errors).length === 0 && submit){
      console.log(data)
   }
  }
  
  const logup = e =>{
   e.preventDefault();
   const {user} =  createUserWithEmailAndPassword(auth,email,password,password,confirmpassword,firstname,lastname)
   
   .then(user => alert('success')).catch(err=> alert('data already have'))
   seterrors(validate(data))
   setsubmit(true)
   if(Object.keys(errors).length === 0 && submit){
      
   }
  }

 //errors fields//
  const validate = (data) =>{
   const errors = {};
   const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
   if(!data.firstname){
      errors.firstname ="firstname is required!"
   }
   if(!data.lastname){
      errors.lastname ="lastname is required!"
   }
   if(!data.confirmpassword){
      errors.confirmpassword ="password is required!"
   }else if(data.password !== data.confirmpassword){
      errors.confirmpassword = "password not match!"
   }
   if(!data.email){
      errors.email ="email is required!"
   }else if(
      !regex.test(data.email)
   ){
      errors.email ='email must be charcters @'
   }
   if(!data.password){
      errors.password ="password is required!"
   }else if(data.password.length < 8){
      errors.password ="password must and sholud above 8 characters!"
   }
   return errors
  }
  
  return (
    <div >
       <div class="wrapper">
         <div class="title">
            Login Form
         </div>
         <form onSubmit={submithandle}>
            <div class="field">
               <input type="text" name='email' 
             
               value={data.email} onChange={changeHandler} />
               <label>Email Address</label><br/>
               <p>{errors.email}</p>
              
            </div>
            <div class="field">
               <input type="password" name='password' value={data.password} onChange={changeHandler}/>
               <label>Password</label><br/>
               <p>{errors.password}</p>
            </div>
            <div class="content">
               
               <div class="pass-link">
                  <a >Forgot password?</a>
               </div>
            </div>
            <div class="field">
               <input type="submit" onClick={login} value="Login"/>
            </div>
            <div class="signup-link">
               Not a member? <a onClick={()=> setsignup(!signup)} style={{cursor:'pointer'}}>Signup now</a>
            </div>
         </form>
      </div>


      <div className={signup ? "" : 'signup'} style={{position:'absolute',marginTop:'-600px'}}>
      <div class="wrapper">
         <div class="title">
           signup form
         </div>
         <form onSubmit={submithandle}>
         <div class="field">
               <input type="text" name='firstname' value={data.firstname}  onChange={changeHandler}/>
               <label>first-name</label>
               <p>{errors.firstname} </p>
            </div>
            <div class="field">
               <input type="text" name='lastname' value={data.lastname}  onChange={changeHandler}/>
               <label>last-name</label>
               <p>{errors.lastname} </p>
            </div>
            <div class="field">
               <input type="email" name='email'value={data.email}  onChange={changeHandler}/>
               <label>Email Address</label>
               <p>{errors.email} </p>
            </div>
            <div class="field">
               <input type="password" name='password' value={data.password}  onChange={changeHandler}/>
               <label>Password</label>
               <p>{errors.password} </p>
            </div>
            <div class="field">
               <input type="password" name='confirmpassword' value={data.confirmpassword}  onChange={changeHandler}/>
               <label>confirm-Password</label>
               <p>{errors.confirmpassword} </p>
            </div>
            
            <div class="field">
               <input type="submit" onClick= {logup} value="signup"/>
            </div>
            <div class="signup-link">
              already have account? <a onClick={() =>setsignup(false)} style={{cursor:'pointer'}}>Login now</a>
            </div>
         </form>
      </div>
      </div>
    </div>
  )
}

export default Auth