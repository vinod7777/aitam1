import React from 'react'
import Nav from '../components/nav.jsx'
import Hackathon from '../components/hackthon.jsx'
import JoinUs from '../components/JoinUs.jsx'
import Footer from '../components/footer.jsx'


export default function OfflineTrack() {
  return (
    <div>
        <Nav />
        <Hackathon defaultTab="physical" />
        <JoinUs />
        <Footer />
    </div>
  )
}
