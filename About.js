import React from 'react'
import { auth } from './firebase'

const About = ({presentuser}) => {
     

const email = presentuser?.email;


  return (
    <div>
      <h1>welcome user <span>{presentuser?.email}</span></h1>
      <button onClick={() => auth.signOut()} >signout</button>
    </div>
  )
}

export default About