import React, { useLayoutEffect } from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import Hero from '../components/hero.jsx'
import AboutUs from '../components/AboutUs.jsx'
import ProblemStatement from '../components/problem_stmt.jsx';
import Hackthon from '../components/hackthon.jsx';
import Techfestgallery from '../components/Techfestgallery.jsx';
import Oursponsors from '../components/Oursponsor.jsx';
import OurPartners from '../components/OurPartners.jsx';
import Questionasked from '../components/questionasked.jsx';
import JoinUs from '../components/JoinUs.jsx';
import Footer from '../components/footer.jsx';



export default function Home() {
  // useLayoutEffect(() => {
  //   gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

  //   const smoother = ScrollSmoother.create({
  //     wrapper: '#smooth-wrapper',
  //     content: '#smooth-content',
  //     smooth: 1.5, // seconds to "catch up" to the native scroll position
  //     effects: true, // look for data-speed and data-lag attributes on elements
  //   });

  //   // Cleanup on component unmount
  //   return () => smoother.kill();
  // }, []);

  return (
    <div id="smooth-wrapper" className="w-full h-full overflow-x-hidden">
      <div id="smooth-content">
        <Hero />
        <AboutUs />
        <ProblemStatement /> 
        <Hackthon defaultTab="virtual" />
        <Techfestgallery />
        <Oursponsors />
        <OurPartners />
        <Questionasked />
        <JoinUs />
        <Footer />
      </div>
    </div>
  )
}
