import React from 'react'
import JoinUs from '../components/JoinUs'
import Footer from '../components/footer'
import Nav  from '../components/nav'

import Login from '../components/Login'; 
export default function Loginpage() {
  return (
    <div>
         <Nav />
       
        <Login/> 
        <JoinUs/>
        <Footer/>
    </div>
  )
}
