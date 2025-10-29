import React from 'react'
import { motion } from 'framer-motion';
import { textVariant, fadeIn } from './util/motion'; // Assuming these are in motion.js
import sponsor1 from '../assets/sponsor/gfg.png';
import sponsor2 from '../assets/sponsor/ccc.png';
import sponsor3 from '../assets/sponsor/new-leaf.png';
import sponsor4 from '../assets/sponsor/instack.png';
import sponsor5 from '../assets/sponsor/smartbridge.jpeg';
import sponsor6 from '../assets/sponsor/shtc.png';
import sponsor7 from '../assets/sponsor/matrix.png';
import sponsor8 from '../assets/sponsor/github.png';
import sponsor9 from '../assets/sponsor/dualityai.png';
import sponsor10 from '../assets/sponsor/moonex.png';
import sponsor11 from '../assets/sponsor/unstop.png';
import sponsor12 from '../assets/sponsor/interview_buddy.png';
import sponsor13 from '../assets/sponsor/xyz.png';
import sponsor14 from '../assets/sponsor/interview-cake.jpg';
import sponsor15 from '../assets/sponsor/interview-cake.jpg';



const sponsors = [
  { name: 'Sponsor 1', logo: sponsor1 },
  { name: 'Sponsor 2', logo: sponsor2 },
  { name: 'Sponsor 3', logo: sponsor3 },
  { name: 'Sponsor 4', logo: sponsor4 },
  { name: 'Sponsor 6', logo: sponsor5 },
  { name: 'Sponsor 5', logo: sponsor6 },
  { name: 'Sponsor 7', logo: sponsor7 },
  { name: 'Sponsor 8', logo: sponsor8 },
  { name: 'Sponsor 9', logo: sponsor9 },
  { name: 'Sponsor 10',logo: sponsor10},
  { name: 'Sponsor 11',logo: sponsor11},
  { name: 'Sponsor 12',logo: sponsor12},
  { name: 'Sponsor 13',logo: sponsor13},
  { name: 'Sponsor 14',logo: sponsor14},
  { name: 'Sponsor 15',logo: sponsor15},
];
sponsor2 
export default function Oursponsor() {
  return (
    <div className='bg-[#020617] py-20'>
      <motion.h2
        variants={textVariant()}
        className="text-4xl md:text-5xl font-bold text-cyan-400 mb-16 text-center"
        style={{ fontFamily: 'Orbitron, sans-serif' }}
      >
        OUR SPONSORS
      </motion.h2>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-white text-center">
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mx-[5rem] items-center">
          {sponsors.map((sponsor, index) => (
            <motion.div key={index} variants={fadeIn('up', 'spring', index * 0.1, 0.5)} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} className="flex justify-center items-center bg-white rounded-lg transition-transform duration-300 hover:scale-105 h-24 p-2">
              <img src={sponsor.logo} alt={sponsor.name} className="max-h-18 max-w-full  object-contain" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
