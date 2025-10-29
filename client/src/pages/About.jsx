import React from 'react'
import JoinUs from '../components/JoinUs'
import Footer from '../components/footer'
import Nav  from '../components/nav'
import AboutUs from '../components/AboutUs.jsx'
import SmoothScrollLayout from '../components/util/SmoothScrollLayout.jsx'
export default function About() {
  return (
    <div>
      
      <Nav />
      <AboutUs/>
      <JoinUs/>
      <Footer/>
    </div>
  )
}
