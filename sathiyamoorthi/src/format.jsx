import React from 'react'
import './format.css'
import Demo from './component/demo'
import { NavLink } from 'react-router-dom'

function format() {
  return (
    <>
    <Demo/>
    
    <div id='box'>
     <h1>Login</h1>
    
    <input id='name'type=''placeholder='Enter your Email'></input>
    <input id='pass'type=''placeholder='Enter your Password'></input>
    <a>
       <p id='sign'>
        Don't have an account?<a href='sign'>sign up</a> 
        
    </p>
        <button id='btn'>submit</button>
        
    </a>
    
    
    </div>
     
    
    
    </>
  )
}

export default format