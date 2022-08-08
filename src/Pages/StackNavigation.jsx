import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './Home'
import Gallery from './Gallery'
import Service from './Service'
import Contact from './Contact'
import AboutUs from './AboutUs'
import Error from './Error'

function StackNavigation() {
  return (
       <Routes>
         <Route path='/' element={ <Home/>}/>
         <Route path='/Gallery' element={ <Gallery/>}/>
         <Route path='/Service' element={ <Service/>}/>
         <Route path='/Contact' element={ <Contact/>}/>
         <Route path='/AboutUs' element={ <AboutUs/>}/>
         <Route path='/*' element={ <Error/>}/>
       </Routes>
  )
}

export default StackNavigation