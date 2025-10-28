import React from 'react'
import { motion } from 'framer-motion';
import { fadeIn, textVariant } from './util/motion'; // Assuming these are defined in your motion.js
import tech from '../assets/one-CfajMqrr.webp';
export default function Techfestgallery() {
  // Placeholder images - replace these with your actual photo URLs
  const galleryImages = [
    tech,
    tech,
    tech,
    tech,
    tech,
    tech,
    tech,
    tech,
    tech,
  ];

  // Function to generate random grid spans for a more dynamic layout
  const getRandomGridSpan = () => {
    const colSpan = Math.floor(Math.random() * 2) + 1; // 1 or 2 columns
    const rowSpan = Math.floor(Math.random() * 2) + 1; // 1 or 2 rows
    return {
      gridColumnEnd: `span ${colSpan}`,
      gridRowEnd: `span ${rowSpan}`,
    };
  };

  return (
    <div className='bg-[#020617] py-20'>
      <motion.h2
        variants={textVariant()}
        className="text-4xl md:text-5xl font-bold text-cyan-400 mb-12 text-center"
        style={{ fontFamily: 'Orbitron, sans-serif' }}
      >
        TECH FEST GALLERY
      </motion.h2>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[150px]">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              variants={fadeIn('up', 'spring', index * 0.1, 0.5)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="relative overflow-hidden rounded-lg shadow-lg group"
              style={getRandomGridSpan()}
            >
              <img
                src={image}
                alt={`Fest Photo ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-opacity-25 group-hover:bg-opacity-0 transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
