import React from 'react';
import { motion } from 'framer-motion';
import { textVariant, fadeIn } from './util/motion';
import partner1 from '../assets/partner/gfg.jpg';
import partner2 from '../assets/partner/gdglogo.png';
import partner3 from '../assets/partner/brandingjester.png';
import partner4 from '../assets/partner/Flashootlogo.png';
import partner5 from '../assets/partner/unstop.png';


const allPartners = [
  { name: 'GDG', logo: partner1, type: 'Outreach Partner' },
  { name: 'GFG', logo: partner2, type: 'Outreach Partner' },
  { name: 'Branding Jester', logo: partner3, type: 'Media Partner' },
  { name: 'Flashoot', logo: partner4, type: 'Media Partner' },
  { name: 'Aitamrise Incubator', logo: 'AITAMRISE INCUBATOR', type: 'Incubation Partner' },
  { name: 'Unstop', logo: partner5, type: 'Platform Partner' },
];

const groupedPartners = allPartners.reduce((acc, partner) => {
  if (!acc[partner.type]) {
    acc[partner.type] = [];
  }
  acc[partner.type].push(partner);
  return acc;
}, {});

export default function OurPartners() {
  return (
    <div className='bg-[#020617] py-20 scrollbar-hide' >
      <motion.h2
        variants={textVariant()}
        className="text-4xl md:text-5xl font-bold text-cyan-400 mb-16 text-center"
        style={{ fontFamily: 'Orbitron, sans-serif' }}
      >
        OUR PARTNERS
      </motion.h2>

      <div className="container scrollbar-hide ">
        <div className="flex justify-center gap-6 overflow-x-auto pb-4  overflow-y-auto scrollbar-hide">
        {Object.entries(groupedPartners).map(([type, partners], catIndex) => (
          <div key={type} className="flex-shrink-0 text-center scrollbar-hide ">
            <motion.h3
              variants={fadeIn('up', 'tween', catIndex * 0.1, 0.5)}
              className="text-xl md:text-2xl font-bold text-white mb-8 scrollbar-hide"
              style={{ fontFamily: 'Orbitron, sans-serif' }}
            >
              {type}
            </motion.h3>
            <div className="flex flex-wrap justify-center gap-8 items-center  scrollbar-hide ">
              {partners.map((partner, index) => (
                <motion.div key={index} variants={fadeIn('up', 'spring', (catIndex * 0.2) + (index * 0.1), 0.5)} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} className="flex  scrollbar-hide   backdrop-blur-sm   rounded-lg transition-transform duration-300 hover:scale-105  h-30 w-27">
                  <img src={partner.logo} alt={partner.name} className="max-h-15 w-auto object-contain scrollbar-hide " />
                </motion.div>
              ))}
            </div>
          </div>
          ))}
        </div>
      </div>
    </div>
  );
}
