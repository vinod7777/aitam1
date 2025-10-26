import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import pandaAbout from '../assets/panda_about.webp';
import { staggerContainer, fadeIn } from './util/motion';

const About = () => {
  const stats = [
    { value: '2', label: 'Seasons' },
    { value: '2000+', label: 'Participants' },
    { value: '90+', label: 'Projects' },
  ];

  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Create parallax effect for the image
  const x = useTransform(scrollYProgress, [0, 1], ['-40%', '20%']);
  const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1.1]);

  return (
    <motion.section
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      ref={sectionRef} id="about" className="relative w-full py-20 flex items-center justify-center" style={{ backgroundColor: '#020618' }}>
      <div className="container mx-auto px-6 md:px-10 text-white">
        <motion.div variants={fadeIn('up', 'tween', 0.2, 1)} className="text-center mb-5">
          <p className="text-[#00ffff] text-xl md:text-3xl lg:text-5xl tracking-[0.2em] font-bold"
             style={{
               fontFamily: "Orbitron, sans-serif",
               WebkitFontSmoothing: 'antialiased',
             }}>
            OUR SPARK
          </p>
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div variants={fadeIn('right', 'tween', 0.2, 1)} className="text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-cyan-400 mb-6" style={{ fontFamily: 'Orbitron, sans-serif' }}>
            What is Aavishkar?
          </h2>
          <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-10" style={{ fontFamily: 'sans-serif' }}>
            Aavishkar is a 48-hour innovation marathon that challenges bright minds to turn bold ideas into real-world solutions. After two successful seasons, Aavishkar returns bigger and better — now in two phases: a 24-hour online hackathon and an on-campus 48-hour grand finale. Across themes like AI, Robotics, Sustainability, Smart Systems, and Emerging Technologies, participants from across India come together to create, collaborate, and compete. Experience hands-on mentoring, expert-led workshops, and an electrifying atmosphere of creativity and problem-solving. Join us as we push boundaries, prototype the future, and shape ideas that can make a difference. Because at Aavishkar — innovation never sleeps.
          </p>

          <div className="border-t border-gray-700 my-10"></div>

          <h3 className="text-2xl md:text-3xl font-bold text-cyan-400 mb-6" style={{ fontFamily: 'Orbitron, sans-serif' }}>
            Previous Stats
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="p-6 bg-darklw-2 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
                <p className="text-4xl font-bold text-cyan-300 drop-shadow-[0_0_8px_#00ffff]" style={{ fontFamily: 'Orbitron, sans-serif' }}>{stat.value}</p>
                <p className="text-base text-gray-400 mt-2" style={{ fontFamily: 'Orbitron, sans-serif' }}>{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div variants={fadeIn('left', 'tween', 0.2, 1)} className="w-full  flex items-center justify-center overflow-hidden">
          <motion.img
            src={pandaAbout}
            alt="Aavishkar Panda Mascot"
            className="w-full max-w-md lg:max-w-lg object-contain drop-shadow-[0_0_15px_#00ffff44]"
            style={{ x, scale, willChange: 'transform' }}
            animate={{ y: ["-20px", "20px"] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;