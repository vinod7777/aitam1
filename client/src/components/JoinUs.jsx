import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn, textVariant } from './util/motion';
import Title from './Title';

const JoinUs = () => {
  return (
    <div className="bg-[#020617] py-20 text-center">
      <div className="container mx-auto px-8 sm:px-12 lg:px-16">
        <motion.h2
          variants={textVariant(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="text-3xl md:text-4xl font-bold  text-cyan-400 mb-10"
          style={{ fontFamily: 'Orbitron, sans-serif' }}
        >
          Welcome to Avishkaar Season 3
        </motion.h2>
        <Title />
        <motion.p
          variants={fadeIn('up', 'tween', 0.2, 0.8)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="text-slate-300 max-w-5xl mx-auto text-base mt-8 md:mt-12 md:text-lg leading-relaxed"
        >
          Welcome to the Official Website of Avishkaar Season 3 — a high-energy arena where innovation meets impact. Step into an immersive hackathon experience that celebrates creativity, teamwork, and cutting-edge technology. From AI and web to AR/VR, IoT, and sustainability, Avishkaar brings together brilliant minds to prototype bold ideas, build real solutions, and present them to mentors and industry leaders. Join us for 48 hours of focused problem-solving, lightning workshops, deep-dive mentoring, and live demos — where every commit pushes the future forward and every project can spark change.
        </motion.p>
      </div>
    </div>
  );
};

export default JoinUs;