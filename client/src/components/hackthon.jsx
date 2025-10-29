import React, { useState, useEffect, useRef } from 'react';
import { FaLaptopCode, FaPeopleGroup, FaArrowRight } from 'react-icons/fa6';
  import { motion, AnimatePresence, useMotionValue, useTransform, animate, useAnimation, useScroll, useSpring } from 'framer-motion';
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
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(interval);
  }, [targetDate]); 

  const formatTime = (time) => String(time).padStart(2, '0');

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

const TimelineItem = ({ phase, index }) => {
  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["center end", "start center"]
  });

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const dotScale = useTransform(scrollYProgress, [0.4, 0.5, 0.6], [1, 1.5, 1]);
  const dotBoxShadow = useTransform(
    scrollYProgress,
    [0.4, 0.5, 0.6],
    ['0 0 0px #06b6d400', '0 0 15px #06b6d4', '0 0 0px #06b6d400']
  );

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      ref={cardRef}
      className={`relative pl-12 md:pl-0 md:flex items-center mb-16 last:mb-0 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1, y: ["0rem", "-1rem", "0rem"] }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{
        duration: 0.5,
        ease: "easeOut",
        y: {
          repeat: Infinity, duration: 3, ease: "easeInOut"
        }
      }}
    >
      <div className={`md:w-1/2  ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8 md:order-2'} relative z-20`}>
        <div 
          onMouseMove={handleMouseMove}
          className="relative group p-6 bg-[#0f172b] rounded-lg overflow-hidden text-left"
        >
          <RotatingBorder />
          <motion.div
            className="pointer-events-none absolute -inset-px rounded-lg opacity-0 transition duration-300 group-hover:opacity-100"
            style={{
           
              zIndex: 15,
              background: useTransform(
                [mouseX, mouseY],
                ([x, y]) =>
                  `radial-gradient(350px at ${x}px ${y}px, rgba(6, 182, 212, 0.15), transparent 80%)`
              ),
            }}
          /> {/* This is the spotlight effect div */}
          <div className="relative z-20">
            <h4 className="text-xl font-bold text-white mb-3" style={{ fontFamily: 'Orbitron, sans-serif' }}>{phase.title}</h4>
            {Array.isArray(phase.description) ? (
              <ul className="text-gray-400 text-[0.9rem] md:text-[1rem] list-disc px-3 list-outside space-y-1">
                {phase.description.map((point, idx) => {
                  if (typeof point === 'object' && point.main) {
                    return (
                      <li key={idx}>
                        {point.main}
                        <ul className="list-disc list-inside pl-4 mt-1 space-y-1">
                          {point.sub.map((subPoint, subIdx) => <li key={subIdx}>{subPoint}</li>)}
                        </ul>
                      </li>
                    );
                  }
                  return <li key={idx}>{point}</li>;
                })}
              </ul>
            ) : (
              <div className="space-y-4">
                <ul className="text-gray-400 text-[0.9rem] md:text-[1rem] list-disc px-3 list-outside space-y-1">
                  {phase.description.intro.map((point, idx) => <li key={`intro-${idx}`}>{point}</li>)}
                </ul>
                <div className="bg-slate-900/50 p-4 rounded-md">
                  <h5 className="font-semibold text-cyan-400 mb-2">{phase.description.abstract.title}</h5>
                  <ul className="text-gray-400 text-sm list-disc list-inside space-y-1">
                    {phase.description.abstract.points.map((point, idx) => <li key={`abstract-${idx}`}>{point}</li>)}
                  </ul>
                </div>
                <div className="bg-slate-900/50 p-4 rounded-md">
                  <h5 className="font-semibold text-cyan-400 mb-2">{phase.description.video.title}</h5>
                  <ul className="text-gray-400 text-sm list-disc list-inside space-y-1">
                    {phase.description.video.points.map((point, idx) => <li key={`video-${idx}`}>{point}</li>)}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <motion.div style={{ scale: dotScale, boxShadow: dotBoxShadow }} className="absolute left-4 md:left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 md:order-1 w-8 h-8 rounded-full bg-[#0f172b] border-2 border-cyan-400 flex items-center justify-center">
        <div className="w-4 h-4 rounded-full bg-cyan-400" />
      </motion.div>
    </motion.div>
  );
};

const VirtualTimeline = () => {
  const timelineRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start end", "end start"]
  });

  const pathLength = useSpring(
    useTransform(scrollYProgress, [0.1, 0.8], [0, 1]),
    { stiffness: 400, damping: 90 }
  );

  const phases = [
    {
      title: 'Phase 1: Registration & Confirmation',
      description: [
        'Teams must register through the official Avishkaar Season 3 portal before the deadline.',
        'Each team may consist of 1 to 4 members.',
        'Once registered, a confirmation email with your Team Code will be sent.',
        'No changes to team composition will be entertained after registration closes.'
      ]
    },
    {
      title: 'Phase 2: Hackathon Kickoff & Problem Statement Release',
      description: [
        'The problem statements will be released on the day of the hackathon via email and on the official communication group at the scheduled start time.',
        'All teams will receive the same set of curated problem statements.',
        'Teams must choose any one problem statement and begin working on their solution immediately.',
        'A 24-hour timer will start the moment the problem statements are released.',
        'Strict adherence to the time limit is required. Late submissions will not be accepted.'
      ]
    },
    {
      title: 'Phase 3: Product Development - Within 24 Hours',
      description: [
        'Teams should start by discussing the problem, brainstorming solutions, dividing roles, and setting internal milestones.',
        'All coding, design, and documentation must be completed within the 24-hour timeframe.',
        'Participants may use any technology stack, APIs, or platforms, but must document them clearly in the submission.',
        'No technical mentoring will be provided, but a helpdesk will be available for queries related to problem scope, submission process, and file format or access issues.'
      ]
    },
    {
      title: 'Phase 4: Final Submission',
      description: [
        'Before the 24-hour window closes, each team must upload the following via the official submission portal:',
        '  Code Repository Link (GitHub or Google Drive, ensure access is public, folder must be clearly structured and labelled).',
        '  Technical Documentation (PDF: Overview of solution, Workflow and architecture, Tools and technologies used, Instructions to run the code).',
        '  Pitch Deck (6–8 Slides: Title, Problem, Solution, Innovation, Tech Stack, Screenshots, Impact, Team Info).'
      ]
    },
    {
      title: 'Phase 5: Evaluation & Pitching (Post-Hackathon)',
      description: [
        'After the hackathon, submissions will be reviewed by an expert jury panel comprising industry professionals and academicians.',
        'Teams will receive a time slot and must be available for a 5-7 minute pitch, followed by a brief Q&A with the jury.',
        'No changes to team composition will be entertained after registration closes.'
      ]
    },
  ];

  return (
    <div ref={timelineRef} className="relative z-20 mt-20 w-full text-left">
      <motion.h3 variants={textVariant()} className="text-3xl md:text-5xl font-bold text-cyan-400 mb-16 text-center" style={{ fontFamily: 'Orbitron, sans-serif' }}>
        Virtual Timeline
      </motion.h3>
      <div className="relative w-full max-w-6xl mx-auto">
        <div className="absolute left-4 md:left-1/2 top-0 h-full w-1 -ml-[2px]">
       
          <div className="h-full w-full bg-cyan-900/50"></div>
       
          <motion.div 
            className="absolute top-0 left-0 h-full w-full bg-cyan-400"
            style={{ 
              scaleY: pathLength, 
              transformOrigin: 'top',
              boxShadow: '0 0 15px #06b6d4'
            }} 
          />
        </div>

        {phases.map((phase, index) => (
          <TimelineItem key={index} phase={phase} index={index} />
        ))}
      </div>
    </div>
  );
};

const PhysicalTimeline = () => {
  const timelineRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start end", "end start"]
  });


  const pathLength = useSpring(
    useTransform(scrollYProgress, [0.1, 0.8], [0, 1]),
    { stiffness: 400, damping: 90 }
  );

  const phases = [
    {
      title: 'Phase 1: Registration & Idea Submission',
      description: {
        intro: [
          'Visit the Avishkaar portal and register your team (1-4 members).',
          'Submit the following:',
          'Abstract Document (Max 2 pages) in PDF format',
          '1-Minute Video Pitch (YouTube Unlisted or Google Drive link)'
        ],
        abstract: {
          title: 'Abstract',
          points: [
            'Problem title & description',
            'Real-world pain points with validation (data if available)',
            'Current solutions & their limitations',
            'Your proposed solution and why it\'s better',
            'Technology plan and feasibility',
            'Diagrams/ wireframes/ flowcharts that supports your idea'
          ]
        },
        video: {
          title: 'Video',
          points: [
            'Brief team intro',
            'Problem overview',
            'Solution in simple terms',
            'Unique features and intended impact'
          ]
        }
      }
    },
    {
      title: 'Phase 2: Screening & Selection',
      description: [
        'A panel of academic and industry experts will review all submissions.',
        'Evaluation is based on originality, relevance, clarity, feasibility, and potential.',
        'Shortlisted teams will be invited to attend the 48-hour on-campus finale.',
        {
          main: 'Selected teams will receive:',
          sub: [
            'Official invitation with Guidelines of the program.',
            'Travel schedule and logistics Info.',
            'Instructions for Mentoring phase'
          ]
        }
      ]
    },
    {
      title: 'Phase 3: Mentorship Phase',
      description: [
        'Shortlisted teams will be paired with mentors (faculty/startup experts).',
        'Duration: 3 weeks',
        {
          main: 'Weekly session to refine:',
          sub: [
            'Problem understanding ',
            'Technical architecture & tech stack choices',
            'Solution viability and pitch',
          ]
        }
      ]
    },
    {
      title: 'Phase 4: Hackathon Days - Finale On-Campus',
      description: [
        'Teams will report to AITAM campus on the notified date in December 2025.',
        {
          main: 'After verification and onboarding, teams will receive:',
          sub: [
            'Working space with internet & power',
            'Access to helpdesk volunteers',
            'Basic hardware support (if requested in advance)'
          ]
        },
        'You\'ll then dive into 48 continuous hours of hands-on building, testing, and innovating!',
      ]
    },
    {
      title: 'Phase 5: Evaluation & Pitching (Post-Hackathon)',
      description: [
        'After the hackathon, submissions will be reviewed by an expert jury panel comprising industry professionals and academicians.',
        'Selected teams will be invited to present their project in a virtual pitching session.',
        'Teams will receive a time slot and must be available for a 5-7 minute pitch, followed by a brief Q&A with the jury.',
        'No changes to team composition will be entertained after registration closes.'
      ]
    },
  ];

  return (
    <div ref={timelineRef} className="relative z-20 mt-20 w-full text-left">
      <motion.h3 variants={textVariant()} className="text-3xl md:text-5xl font-bold text-cyan-400 mb-16 text-center" style={{ fontFamily: 'Orbitron, sans-serif' }}>
        Physical Timeline
      </motion.h3>
      <div className="relative w-full max-w-6xl mx-auto">
        <div className="absolute left-4 md:left-1/2 top-0 h-full w-1 -ml-[2px]">
          {/* Background line */}
          <div className="h-full w-full bg-cyan-900/50"></div>
          {/* Progress line */}
          <motion.div 
            className="absolute top-0 left-0 h-full w-full bg-cyan-400"
            style={{ 
              scaleY: pathLength, 
              transformOrigin: 'top',
              boxShadow: '0 0 15px #06b6d4'
            }} 
          />
        </div>

        {phases.map((phase, index) => (
          <TimelineItem key={index} phase={phase} index={index} />
        ))}
      </div>
    </div>
  );
};

const Hackathon = ({ defaultTab = 'physical' }) => {
  const [activeTab, setActiveTab] = useState(defaultTab);
  const controls = useAnimation();
const physicalPrizes = [
    {
      place: '2nd',
      amount: 100000,
      color: 'bg-slate-400',
      shadow: 'shadow-[0_0_15px_#a0aec0]',
      height: '144px',
      textColor: 'text-slate-400',
      textShadow: 'drop-shadow-[0_0_8px_#a0aec088]'
    },
    {
      place: '1st',
      amount: 125000,
      color: 'bg-amber-400',
      shadow: 'shadow-[0_0_15px_#facc15]',
      height: '192px',
      textColor: 'text-amber-400',
      textShadow: 'drop-shadow-[0_0_8px_#facc1588]'
    },
    { 
      place: '3rd', 
      amount: 75000, 
      color: 'bg-orange-600', 
      shadow: 'shadow-[0_0_15px_#ea580c]', 
      height: '96px', 
      textColor: 'text-orange-600', 
      textShadow: 'drop-shadow-[0_0_8px_#ea580c88]' 
    },
 ];

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
 const importantDatesPhysical = [
    { event: 'Registrations Open', date: 'Oct 23, 2025' },
    { event: 'Abstract & Video Submission Deadline', date: 'Nov 20, 2025' },
    { event: 'Results of Shortlisting', date: 'Nov 30, 2025' },
    { event: 'Mentorship Phase Begins', date: 'Dec 1,2025' },
    { event: 'Mentorship Phase Ends', date: 'Dec 21, 2025' },
    { event: 'Reporting at Campus', date: 'Dec 26, 2025 (Evening)' },
    { event: 'Hackathon Begins', date: 'Dec 27, 2025 - 9:00 AM' },
    { event: 'Hackathon Ends', date: 'Dec 29, 2025 - 9:00 AM' },
    { event: 'Final Jury & Awards Ceremony', date: 'Dec 29, 2025 - 2:00 PM onwards' }
    
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
      <VirtualTimeline />
    </div>
  );

  const physicalContent = (
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
              Physical Hackathon
            </h3>
            <p className="text-lg text-gray-400 mb-8" style={{ fontFamily: 'Orbitron, sans-serif' }}>
              48-Hour On-Campus Format
            </p>
            <ul className="space-y-3 text-base md:text-lg text-gray-300 list-disc list-inside mb-8" style={{ fontFamily: 'sans-serif' }}>
              <li>Engage in a 48-hour marathon of innovation on-campus.</li>
              <li>Teams of 1–4 register and submit a 2-page abstract and 1-minute video pitch.</li>
              <li>Experts shortlist teams based on originality and feasibility.</li>
              <li>Selected teams undergo 3 weeks of mentorship.</li>
              <li>Collaborate with peers, build prototypes, and present your solutions to a panel of experts.</li>
              <li>⁠Final pitches judged on innovation, depth, and presentation.</li>
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

  const physicalContentGrid = (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {physicalContent}
        <div className="text-center p-8 rounded-lg h-full">
          <h3 className="text-3xl md:text-4xl font-bold text-cyan-400 mb-8" style={{ fontFamily: 'Orbitron, sans-serif' }}>
            Prize Pool
          </h3>
          <div className="flex justify-around items-end h-64">
            {physicalPrizes.map((prize, index) => (
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
        <CountdownTimer targetDate="2025-12-27T09:00:00" />
      <div className="relative z-20 mt-16 w-full text-left">
        <h3 className="text-3xl md:text-5xl font-bold text-cyan-400 mb-12 text-center" style={{ fontFamily: 'Orbitron, sans-serif' }}>
          Important Dates
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" style={{ fontFamily: 'Orbitron, sans-serif' }}>
          {importantDatesPhysical.map((item, index) => (
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
      <PhysicalTimeline />
    </div>
  );

  const tabs = [
    { id: 'virtual', label: 'Virtual Hackathon', icon: <FaLaptopCode className="w-6 h-6 mr-3" />, content: virtualContentGrid },
    { id: 'physical', label: 'Physical Hackathon', icon: <FaPeopleGroup className="w-6 h-6 mr-3" />, content: physicalContentGrid },
  ];
  return (<motion.section variants={staggerContainer()} initial="hidden" whileInView="show"
      viewport={{ once: false, amount: 0.1 }}
      id="hackathon" className="relative w-full py-20 flex items-center justify-center" style={{ backgroundColor: '#020618', position: 'relative' }}>
      <div className="container mx-auto px-6 md:px-10 text-white text-center">
        <motion.h2 variants={textVariant()} className="text-4xl  md:text-5xl font-bold text-cyan-400 mb-4" style={{ fontFamily: 'Orbitron, sans-serif' }}>
          Choose Your Battleground
        </motion.h2>
        <motion.p variants={fadeIn('up', 'tween', 0.2, 0.5)} className="text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto">
          Whether you prefer the thrill of in-person collaboration or the flexibility of a virtual challenge, we have a track for you.
        </motion.p>
        <motion.div variants={textVariant()} className="relative z-30 flex justify-center mb-12 rounded-full p-3 bg-gray-900/50 border border-cyan-700/50 max-w-2xl mx-auto">
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
