import React from 'react';
import { motion } from 'framer-motion';
import { staggerContainer, fadeIn, textVariant } from './util/motion';

import { FaPeopleGroup,FaBus,FaLeaf ,FaHeartPulse  ,FaRecycle  ,FaSolarPanel ,FaGlobe  ,FaLightbulb    } from "react-icons/fa6";


const themes = [
  { name: "Digital Empowerment for Rural Communities", color: '#22d3ee', logo: <FaPeopleGroup className="w-12 h-12 mb-4 object-contain text-cyan-400 filter drop-shadow-[0_0_8px_#22d3ee88]" /> },
  { name: "Urban Mobility & Traffic Management", color: '#facc15', logo: <FaBus className="w-12 h-12 mb-4 object-contain filter text-yellow-400 drop-shadow-[0_0_8px_#facc1588]" /> },
  { name: "Agriculture & Food Technology", color: '#4ade80', logo: <FaLeaf className="w-12 h-12 mb-4 object-contain text-green-400 filter drop-shadow-[0_0_8px_#4ade8088]" /> },
  { name: "Medical & Health", color: '#f87171', logo: <FaHeartPulse  className="w-12 h-12 mb-4 object-contain filter text-red-400 drop-shadow-[0_0_8px_#f8717188]" /> },
  { name: "Waste Management & Recycling", color: '#eab308', logo: <FaRecycle  className="w-12 h-12 mb-4 object-contain text-yellow-500 filter drop-shadow-[0_0_8px_#eab30888]" /> },
  { name: "Renewable & Sustainable Energy", color: '#22d3ee', logo: <FaSolarPanel className="w-12 h-12 mb-4 object-contain text-cyan-400 filter drop-shadow-[0_0_8px_#22d3ee88]" /> },
  { name: "Tourism & Travel", color: '#a855f7', logo: <FaGlobe   className="w-12 h-12 mb-4 object-contain filter text-purple-500 drop-shadow-[0_0_8px_#a855f788]" /> },
  { name: "Student Innovation (Open Theme)", color: '#facc15', logo: <FaLightbulb className="w-12 h-12 mb-4 object-contain text-yellow-400 filter drop-shadow-[0_0_8px_#facc1588]" /> },
];

const ProblemStatement = () => {
  return (
    <motion.section
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      id="themes" className="relative w-full py-20 flex items-center justify-center" style={{ backgroundColor: '#020618' }}>
      <div className="container mx-auto px-6 md:px-10 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h2
            variants={textVariant()}
            className="text-3xl md:text-4xl font-bold text-cyan-400 mb-12" style={{ fontFamily: 'Orbitron, sans-serif' }}>
            Themes Breakdown – What Problems You Can Solve?
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            {themes.map((theme, index) => (
              <motion.div
                variants={fadeIn('up', 'spring', index * 0.2, 0.75)}
                key={index}
                className="p-6 bg-gray-900 bg-opacity-50 rounded-lg shadow-lg flex flex-col items-center border border-cyan-900/50 transition-all duration-300"
                whileHover={{
                  scale: 1.05,
                  boxShadow: `0 0 15px ${theme.color}44, 0 0 5px ${theme.color}88 inset`,
                }}>
                {theme.logo}
                <p className="text-base md:text-lg text-center text-gray-300 font-bold tracking-[0.1em]" style={{ fontFamily: 'Orbitron, sans-serif' }}>{theme.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default ProblemStatement;