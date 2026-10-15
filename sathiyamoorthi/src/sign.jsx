import React from 'react'
import './sign.css'
import Demo from './component/demo'
function sign() {
  return (
    <>
<Demo/>
    <div id='box'>
     <h1>Sing up</h1>
    
    <input id='name'type=''placeholder='Enter your Email'></input>
    <input id='pass'type=''placeholder='Enter your Password'></input>
     
     <p id='acc'>Don't have an any account?<a href=''>sign up</a></p>

        <button id='btn'> <a href=''> </a>Get Started</button>
        
    
    
    
    </div>
    
    
    </>
  )
}

export default sign