import React, { useState, useEffect } from 'react';
import aitamLogo from '../assets/aitam_logo.png';
import council from '../assets/council.png';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, MapPin, Instagram, Linkedin, Youtube } from 'lucide-react';
import { FaWhatsapp,FaInstagram,FaLinkedin,FaYoutube   } from "react-icons/fa";
import StarsCanvas from './star';

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = (
    <div
      style={{ fontFamily: 'Orbitron, sans-serif' }}
      className="flex flex-col items-start space-y-6 text-2xl md:text-3xl lg:text-4xl  pl-10 md:pl-10"
    >
      <a href="#home" className="text-white hover:text-cyan-300 transition-colors duration-300 flex items-center group">
        <span className="mr-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">-&gt;</span> <span className="nav-link " data-text="Home">Home</span>
      </a>
      <a href="#about" className="text-white hover:text-cyan-300 transition-colors duration-300 flex items-center group">
        <span className="mr-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">-&gt;</span> <span className="nav-link" data-text="About">About</span>
      </a>
      <a href="#online-track" className="text-white hover:text-cyan-300 transition-colors duration-300 flex items-center group">
        <span className="mr-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">-&gt;</span> <span className="nav-link" data-text="Online Track">Online Track</span>
      </a>
      <a href="#offline-track" className="text-white hover:text-cyan-300 transition-colors duration-300 flex items-center group">
        <span className="mr-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">-&gt;</span> <span className="nav-link" data-text="Offline Track">Offline Track</span>
      </a>
      <a href="#team" className="text-white hover:text-cyan-300 transition-colors duration-300 flex items-center group">
        <span className="mr-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">-&gt;</span> <span className="nav-link" data-text="Team">Team</span>
      </a>
    </div>
  );

  const infoPanel = (
    <div className="hidden md:block w-full md:w-3/5 text-left text-white pr-20  md:pr-10 pl-20 md:pl-0" style={{ fontFamily: 'Inter, sans-serif' }}>
      <h3 className="text-3xl md:text-2xl font-bold text-cyan-400 mb-3 " style={{ fontFamily: 'Orbitron, sans-serif' }}>Avishkaar Season 3</h3>
      <p className="text-base text-gray-300 mb-5 md:mb-0  leading-relaxed">
        Aavishkar is a 48-hour innovation marathon that challenges bright minds to turn bold ideas into real-world solutions. After two successful seasons, Aavishkar returns bigger and better — now in two phases: a 24-hour online hackathon and an on-campus 48-hour grand finale.
       
      </p>
       <div className="flex justify-start items-center gap-4 mb-3 ">
          <a href="#" className="text-gray-400 hover:text-white transition-colors"><FaInstagram className="w-6 h-6 text-cyan-400"  /></a>

          <a href="#" className="text-gray-400 hover:text-white transition-colors"><FaLinkedin  className="w-6 h-6 text-cyan-400" /></a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors"><FaYoutube  className="w-6 h-6 text-cyan-400" /></a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors"><FaWhatsapp className="w-6 h-6 text-cyan-400" /></a>
      </div>
      
    
      <div className="border-t border-gray-700 pt-6">
        <h4 className="text-xl font-bold text-cyan-400 mb-3" style={{ fontFamily: 'Orbitron, sans-serif' }}>Contact Us</h4>
        <div className="flex items-center gap-2 text-base text-gray-300">
          <Phone className="w-4 h-4 text-cyan-400" />
          <span>K. Kranthi Kiran: +91 7386759626</span>
        </div>
        <div className="flex items-center gap-2 text-base text-gray-300 mt-1">
          <Phone className="w-4 h-4 text-cyan-400" />
          <span>S.vinod kumar: +91 9866854604</span>
        </div>
        <div className="flex items-center gap-2 text-base text-gray-300 mt-3">
          <MapPin className="w-4 h-4 text-cyan-400" />
          <span>Aditya Institute of Technology and Management, Tekkali</span>
        </div>
        <a href="mailto:avishkaar@adityatekkali.edu.in" className="flex items-center gap-2 text-base text-cyan-400 hover:underline mt-1">
          <Mail className="w-4 h-4" />
          <span>avishkaar@adityatekkali.edu.in</span>
        </a>
      </div>
      <div className="flex justify-start items-center gap-6 mt-8">
        <img src={aitamLogo} alt="AITAM Logo" className="h-16 hidden lg:inline-block" />
        <img src={council} alt="Council Logo" className="h-16 bg-white p-2 rounded-md hidden lg:inline-block" />
        <a href="#" className="inline-block px-6 py-2 border border-cyan-400 text-cyan-400 rounded-full hover:bg-cyan-400 hover:text-black transition-colors duration-300 text-base">
          Learn More
        </a>
      </div>
      
    </div>
  );


  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  return (
    <>
      <nav className="relative z-[60]">
        <div className="absolute top-0 left-0 w-full flex justify-between items-center h-24 px-4 md:px-10">
          <div className="flex items-center mt-3 p-2 md:p-4 bg-black rounded-md">
            <img src={aitamLogo} alt="AITAM Logo" className="h-10 md:h-12 mr-4 md:mr-6" />
            <img src={council} alt="Council Logo" className="h-10 md:h-12 bg-white p-2 rounded-md" />
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="z-[60] inline-flex items-center justify-center p-2 rounded-md text-cyan-400 hover:text-cyan-300 focus:outline-none drop-shadow-[0_0_3px_theme(colors.cyan.400)]"
          >
            <span className="sr-only">Open main menu</span>
            <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed inset-0 bg-[#020618] bg-opacity-95 z-50 flex flex-col md:flex-row items-center justify-center md:justify-between gap-10 md:gap-0 p-10 md:px-0 overflow-y-auto"
          >
            <StarsCanvas />
            {navLinks}
            {infoPanel}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
