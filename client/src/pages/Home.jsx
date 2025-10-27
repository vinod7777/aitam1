import React, { useLayoutEffect } from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import Hero from '../components/hero.jsx'
import About from '../components/About.jsx';
import ProblemStatement from '../components/problem_stmt.jsx';
import Hackthon from '../components/hackthon.jsx';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function Home() {
  useLayoutEffect(() => {
    const smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1, // Time in seconds for the smoothing effect
      effects: true, // Look for data-speed and data-lag attributes
      smoothTouch: 0.1, // Faster smoothing on touch devices
    });

    return () => smoother.kill();
  }, []);

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">
        <Hero />
        <About />
        <ProblemStatement />
        <Hackthon />
      </div>
    </div>
  )
}
