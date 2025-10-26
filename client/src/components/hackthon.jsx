import React, { useState, useEffect } from 'react';
import { FaLaptopCode, FaPeopleGroup, FaArrowRight } from 'react-icons/fa6';
import { motion, AnimatePresence, useMotionValue, useTransform, animate } from 'framer-motion';
import { staggerContainer, fadeIn, textVariant } from './util/motion';
import pandaAbout from '../assets/panda_about.webp';

function AnimatedNumber({ value, delay = 0 }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest).toLocaleString());

  useEffect(() => {
    const controls = animate(count, value, {
      duration: 1,
      delay: delay + 0.5, // Start after the bar animation
      ease: "easeOut",
    });
    return controls.stop;
  }, [value, delay]);

  return <motion.span>{rounded}</motion.span>;
}

const Hackathon = () => {
  const [activeTab, setActiveTab] = useState('physical');

  const prizes = [
    { place: '2nd', amount: 15000, color: 'bg-slate-400', shadow: 'shadow-[0_0_15px_#a0aec0]', height: '144px' },
    { place: '1st', amount: 25000, color: 'bg-amber-400', shadow: 'shadow-[0_0_15px_#facc15]', height: '192px' },
    { place: '3rd', amount: 10000, color: 'bg-orange-600', shadow: 'shadow-[0_0_15px_#ea580c]', height: '96px' },
  ];

  const virtualContent = (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
      <div className="text-left bg-[#0f172b] p-8 rounded-lg h-full flex flex-col">
        <div>
          <h3 className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2" style={{ fontFamily: 'Orbitron, sans-serif' }}>
            Virtual Hackathon
          </h3>
          <p className="text-lg text-gray-400 mb-8" style={{ fontFamily: 'Orbitron, sans-serif' }}>
            24-Hour Online Format
          </p>
          <ul className="space-y-3 text-base md:text-lg text-gray-300 list-disc list-inside mb-8" style={{ fontFamily: 'sans-serif' }}>
            <li>Online 24-hour hackathon for teams of 1–4 members.</li>
            <li>Problem released at the start; one to be solved within 24 hours.</li>
            <li>Submission includes code link, documentation, and a 6–8 slide pitch deck.</li>
            <li>₹50,000 prize pool with certificates for all valid entries.</li>
            <li>Only non-technical guidance provided.</li>
            <li>Reviewed by industry and academic experts.</li>
          </ul>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-8 py-3 border border-cyan-400 text-cyan-400 rounded-full hover:bg-cyan-400 hover:text-black transition-colors duration-300 text-lg font-bold"
            style={{ fontFamily: 'Orbitron, sans-serif' }}
          >
            Register <FaArrowRight className="ml-2" />
          </motion.button>
        </div>
      </div>
      <div className="text-center  p-8 rounded-lg h-full">
        <h3 className="text-3xl md:text-4xl font-bold text-cyan-400 mb-8" style={{ fontFamily: 'Orbitron, sans-serif' }}>
          Prize Pool
        </h3>
        <div className="flex justify-around items-end h-64">
          {prizes.map((prize, index) => (
            <div key={prize.place} className="flex flex-col items-center">
              <p className="text-lg font-bold text-white mb-2">
                ₹<AnimatedNumber value={prize.amount} delay={index * 0.2} />
              </p>
              <motion.div
                className={`w-16  rounded-t-md ${prize.color} ${prize.shadow}`}
                initial={{ height: 0 }}
                animate={{ height: prize.height }}
                transition={{ duration: 0.5, delay: index * 0.2, ease: "easeOut" }}
              />
              <p className="text-xl font-bold text-cyan-300 mt-3">{prize.place} Place</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const tabs = [
    { id: 'virtual', label: 'Virtual Hackathon', icon: <FaLaptopCode className="w-6 h-6 mr-3" />, content: virtualContent },
    { id: 'physical', label: 'Physical Hackathon', icon: <FaPeopleGroup className="w-6 h-6 mr-3" />, content: <div className="bg-[#0f172b] p-8 rounded-lg max-w-3xl mx-auto">Engage in a 48-hour marathon of innovation on-campus. Collaborate with peers, build prototypes, and present your solutions to a panel of experts.</div> },
  ];

  return (
    <motion.section
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      id="hackathon" className="relative  w-full py-20 flex items-center justify-center" style={{ backgroundColor: '#020618' }}>
      <div className="container mx-auto px-6 md:px-10 text-white text-center">
        <motion.div variants={textVariant()} className="flex justify-center mb-12 rounded-full p-3 bg-gray-900/50 border border-cyan-700/50 max-w-2xl mx-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-4 text-lg font-bold transition-colors duration-300 flex flex-row items-center justify-center w-1/2 relative ${activeTab === tab.id ? 'text-white' : 'text-gray-400 hover:text-cyan-400/50'}`}
              style={{ fontFamily: 'Orbitron, sans-serif' }}
            >
              {activeTab === tab.id && (
                <motion.div layoutId="activeHackathonTab" className="absolute inset-0 bg-cyan-600/30 z-0 rounded-full" />
              )}
              <span className="relative z-10">{tab.icon}</span>
              <span className="relative z-10">{tab.label}</span>
            </button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            variants={fadeIn('up', 'tween', 0.1, 0.5)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-6xl mx-auto text-lg md:text-xl text-gray-300 leading-relaxed"
          >
            {tabs.find(tab => tab.id === activeTab)?.content}
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.section>
  );
};

export default Hackathon;
