import React from 'react'
import './demo.css'
import { NavLink } from 'react-router-dom'

function demo() {
  return (
    <>
<nav id='navbar'>
    <div id='logo'>
        <h1> Sathiyamoorthy.M</h1>
    </div>

   <ul id='content'>
         <li><NavLink to ="/Home">Home</NavLink> </li>
          <li> <NavLink to ="/About">About</NavLink></li>
           <li><NavLink to ="/Feauture">Feauture</NavLink> </li>

            
            
             
   </ul>
   <NavLink to="/format" className='nav-btn'> Login</NavLink>

</nav>

        
        
    </>
       
    
    
  )
}

export default demo