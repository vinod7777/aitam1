import React from 'react'
import Hero from '../components/hero.jsx'
import About from '../components/About.jsx';
import ProblemStatement from '../components/problem_stmt.jsx';
import Hackthon from '../components/hackthon.jsx';

export default function Home() {
  return (
    <div>
        <div className='w-full'>
          <Hero />
        </div>
        <About />
        <ProblemStatement />
        <Hackthon />
    </div>
  )
}
