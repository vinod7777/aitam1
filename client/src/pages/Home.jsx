import React, { useLayoutEffect } from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import Hero from '../components/hero.jsx'
import About from '../components/About.jsx';
import ProblemStatement from '../components/problem_stmt.jsx';
import Hackthon from '../components/hackthon.jsx';
import Techfestgallery from '../components/Techfestgallery.jsx';
import Oursponsors from '../components/Oursponsor.jsx';
import OurPartners from '../components/OurPartners.jsx';
import Questionasked from '../components/questionasked.jsx';
import JoinUs from '../components/JoinUs.jsx';
import { F } from 'maath/dist/index-0332b2ed.esm.js';
import Footer from '../components/footer.jsx';


export default function Home() {
  

  return (
    <div className="w-full h-full bg-black overflow-x-hidden">
        <Hero />
        <About />
        <ProblemStatement />
        <Hackthon />
        <Techfestgallery />
        <Oursponsors />
        <OurPartners />
        <Questionasked />
        <JoinUs />
        <Footer />
    </div>
    
  )
}
