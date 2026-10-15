import React from 'react'
import'./feauture.css'
import Pic2 from './component/image.jpeg'
import Demo from './component/demo.jsx'

function feauture() {
  return (
    <>
<Demo/>

    <p id='feaut'> I am a web developer <br></br>Lorem ipsum dolor sit amet consectetur<br></br> adipisicing elit.
         Excepturi illo repudiandae
         <br></br> similique aut et deleniti enim<br></br>
          libero reiciendis, non quis, <br></br>fugiat delectus accusantium corporis<br></br>
          laudantium quidem maxime cumque sint eaque?</p>
    <div>
        <img src={Pic2} className='hero-image'></img>
    </div>
    
    
    
    </>
  )
}

export default feauture