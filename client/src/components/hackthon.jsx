import React, { useState, useEffect } from 'react';
import { FaLaptopCode, FaPeopleGroup, FaArrowRight } from 'react-icons/fa6';
import { motion, AnimatePresence, useMotionValue, useTransform, animate, useAnimation } from 'framer-motion';
import { staggerContainer, fadeIn, textVariant } from './util/motion';

function AnimatedNumber({ value, delay = 0 }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest).toLocaleString());

  useEffect(() => {
    const controls = animate(count, value, {
      duration: 1,
      delay: delay + 0.5, 
      ease: "easeOut",
    });
    return controls.stop;
  }, [value, delay]);

  return <motion.span>{rounded}</motion.span>;
}

const RotatingBorder = () => (
  <>
    <style>
      {`
        @keyframes rotating-border {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .rotating-border-glow::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: conic-gradient(from 180deg at 50% 50%, #06b6d4, #67e8f9, transparent, transparent);
          animation: rotating-border 4s linear infinite;
          z-index: 1;
        }
      `}
    </style>
    <div className="rotating-border-glow absolute inset-0 rounded-lg" />
    <div className="absolute inset-[1px] bg-[#0f172b] rounded-[7px] z-10" />
  </>
);

const CountdownTimer = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    // The timer should be cleared only when the component unmounts.
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    
    return () => clearInterval(interval);
  }, [targetDate]); // Rerun effect only if targetDate changes

  const formatTime = (time) => String(time).padStart(2, '0');

  // If timeLeft is empty (countdown finished), don't render anything.
  if (Object.keys(timeLeft).length === 0) {
    return null;
  }

  return (
    <div className="flex items-center justify-center space-x-2 md:space-x-6 text-cyan-300 my-25" style={{ fontFamily: 'Orbitron, sans-serif' }}>
      {Object.entries(timeLeft).map(([unit, value]) => (
        <React.Fragment key={unit}>
          <div className="flex flex-col items-center">
            <span className="text-5xl md:text-8xl font-bold text-white drop-shadow-[0_0_10px_#22d3ee]">{formatTime(value)}</span>
            <span className="text-sm md:text-xl uppercase tracking-widest mt-2">{unit}</span>
          </div>
          {unit !== 'seconds' && <span className="text-5xl md:text-8xl font-bold pb-8">:</span>}
        </React.Fragment>
      ))}
    </div>
  );
};

const Hackathon = () => {
  const [activeTab, setActiveTab] = useState('physical');
  const controls = useAnimation();

 const prizes = [
    {
      place: '2nd',
      amount: 15000,
      color: 'bg-slate-400',
      shadow: 'shadow-[0_0_15px_#a0aec0]',
      height: '144px',
      textColor: 'text-slate-400',
      textShadow: 'drop-shadow-[0_0_8px_#a0aec088]'
    },
    {
      place: '1st',
      amount: 25000,
      color: 'bg-amber-400',
      shadow: 'shadow-[0_0_15px_#facc15]',
      height: '192px',
      textColor: 'text-amber-400',
      textShadow: 'drop-shadow-[0_0_8px_#facc1588]'
    },
    { place: '3rd', amount: 10000, color: 'bg-orange-600', shadow: 'shadow-[0_0_15px_#ea580c]', height: '96px', textColor: 'text-orange-600', textShadow: 'drop-shadow-[0_0_8px_#ea580c88]' },
 ];

 const importantDates = [
    { event: 'Registrations Open', date: 'Oct 23, 2025' },
    { event: 'Registrations Close', date: 'Nov 20, 2025' },
    { event: 'Problem Statements Release', date: 'Nov 25, 2025 - 10:00 AM' },
    { event: 'Hackathon Begins', date: 'Nov 25, 2025 - 11:00 AM' },
    { event: 'Hackathon Ends', date: 'Nov 26, 2025 - 11:00 AM' },
    { event: 'Project Submission Deadline', date: 'Nov 26, 2025 - 09:00 AM to 11:00 AM' },
    { event: 'Online Pitching', date: 'Nov 26, 2025 - 10:00 AM Onwards' },
    { event: 'Results Announcement', date: 'Nov 26, 2025' },
  ];

  const virtualContent = (
    <div>
      <motion.div
        onHoverStart={() => controls.start({ opacity: 1, transition: { duration: 0.3 } })}
        onHoverEnd={() => controls.start({ opacity: 0, transition: { duration: 0.3 } })}
        className="relative text-left p-8 bg-[#0f172b]  rounded-lg  overflow-hidden"
      >
        <motion.div animate={controls} initial={{ opacity: 0 }} className="absolute inset-0">
          <RotatingBorder />
        </motion.div>
        <div className="relative z-20">
          <div className="relative z-20">
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
              onClick={() => window.open('https://unstop.com/o/3C4O1aP?lb=O4B2h3r', '_blank')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-3 border border-cyan-400 text-cyan-400 rounded-full hover:bg-cyan-400 hover:text-black transition-colors duration-300 text-lg font-bold"
              style={{ fontFamily: 'Orbitron, sans-serif' }}
            >
              Register <FaArrowRight className="ml-2" />
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  );
  const virtualContentGrid = (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {virtualContent}
        <div className="text-center p-8 rounded-lg h-full">
          <h3 className="text-3xl md:text-4xl font-bold text-cyan-400 mb-8" style={{ fontFamily: 'Orbitron, sans-serif' }}>
            Prize Pool
          </h3>
          <div className="flex justify-around items-end h-64">
            {prizes.map((prize, index) => (
              <div key={prize.place} className="flex flex-col items-center">
                <p className="text-sm font-bold text-white mb-2">
                  ₹<AnimatedNumber value={prize.amount} delay={index * 0.2} />
                </p>
                <motion.div
                  className={`w-16 rounded-t-md ${prize.color} ${prize.shadow}`}
                  initial={{ height: 0 }}
                  animate={{ height: prize.height }}
                  transition={{ duration: 0.5, delay: index * 0.2, ease: "easeOut" }}
                />
                <p className={`text-xl font-bold mt-3 ${prize.textColor} ${prize.textShadow}`}>{prize.place} Place</p>
              </div>
            ))}
          </div>
        </div>
      </div>
        <CountdownTimer targetDate="2025-11-25T22:00:00" />
      <div className="relative z-20 mt-16 w-full text-left">
        <h3 className="text-3xl md:text-5xl font-bold text-cyan-400 mb-12 text-center" style={{ fontFamily: 'Orbitron, sans-serif' }}>
          Important Dates
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" style={{ fontFamily: 'Orbitron, sans-serif' }}>
          {importantDates.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeIn('up', 'spring', index * 0.1, 0.5)}
              className="relative p-6 bg-[#0f172b] rounded-lg overflow-hidden text-center flex flex-col justify-center items-center h-40"
            >
              <RotatingBorder />
              <div className="relative z-20">
                <p className="text-lg font-bold text-white mb-2">{item.event}</p>
                <p className="text-md text-cyan-300 font-mono">{item.date}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    
    </div>
  );

  const tabs = [
    { id: 'virtual', label: 'Virtual Hackathon', icon: <FaLaptopCode className="w-6 h-6 mr-3" />, content: virtualContentGrid },
    { id: 'physical', label: 'Physical Hackathon', icon: <FaPeopleGroup className="w-6 h-6 mr-3" />, content: <div className="bg-[#0f172b] p-8 rounded-lg max-w-3xl mx-auto">Engage in a 48-hour marathon of innovation on-campus. Collaborate with peers, build prototypes, and present your solutions to a panel of experts.</div> },
  ];
  return (<motion.section variants={staggerContainer()} initial="hidden" whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      id="hackathon" className="relative  w-full py-20 flex items-center justify-center" style={{ backgroundColor: '#020618' }}>
      <div className="container mx-auto px-6 md:px-10 text-white text-center">
        <motion.h2 variants={textVariant()} className="text-4xl  md:text-5xl font-bold text-cyan-400 mb-4" style={{ fontFamily: 'Orbitron, sans-serif' }}>
          Choose Your Battleground
        </motion.h2>
        <motion.p variants={fadeIn('up', 'tween', 0.2, 0.5)} className="text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto">
          Whether you prefer the thrill of in-person collaboration or the flexibility of a virtual challenge, we have a track for you.
        </motion.p>
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
