import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Format from './format.jsx'
import Sign from './sign.jsx'
import Home from './Home.jsx'
import Hero from './component/heroics.jsx'
import About from'./about.jsx'
import Feauture from './feauture.jsx'
// import Demo from './component/demo.jsx'
function App() {
  

  return (
    
      <BrowserRouter>
       <Routes>
         <Route path='/format' element={<Format/>}/>
         <Route path='/sign' element={<Sign/>}/>
         <Route path='/' element={<Home/>}/>
         <Route path='/Hero' element={<Hero/>}/>
          <Route path='/About' element={<About/>}/> 
          <Route path='/Feauture' element={<Feauture/>}/> 
          {/* <Route path='/Demo' element={<Demo/>}/>  */}
         

       </Routes>
      </BrowserRouter>


    
  )
}

export default App
