import React from 'react'
import Nav from '../components/nav.jsx'
import Hackathon from '../components/hackthon.jsx'
import JoinUs from '../components/JoinUs.jsx'
import Footer from '../components/footer.jsx'

export default function OnlineTrack() {
  return (
    <div>
        <Nav />
        <Hackathon defaultTab="virtual" />
        <JoinUs />
        <Footer />
    </div>
  )
}
