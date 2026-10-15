import React from 'react'
import  './heroics.css'
import Pic1 from './image.jpeg'

function heroics() {
  return (
  
      < >
      
      
      <div className='bar'>

             <p id='para1'>Hey There,I am Sathiyamoorthy M</p>


             <h1 id='dom'>I am Web Developer</h1>

            <p id='para'>Are you Looking for a Ux/UI<br></br>
            Designer who works hatrd but stay <br></br>
            humble?
            </p>
            <a>
              <button id='btn1'>Download</button>
              
            </a>
            <img src={Pic1} className='hero-image'></img>
       </div>
       
      </>

  )
}

export default heroics