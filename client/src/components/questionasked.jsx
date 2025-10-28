import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { textVariant, fadeIn } from './util/motion';

const faqData = {
  virtual: [
    {
      question: 'Who can participate in AVISHKAAR SEASON 3?',
      answer: 'Students from all academic backgrounds and levels can participate in AVISHKAAR SEASON 3. This includes undergraduate, graduate, and postgraduate students from various disciplines.',
    },
    {
      question: 'Can I participate in both Virtual and Physical Hackathon tracks?',
      answer: 'No, participants can only choose one track - either Virtual or Physical Hackathon. You cannot participate in both tracks simultaneously.',
    },
    {
      question: 'How will the pitching be conducted for the Virtual Hackathon?',
      answer: 'Virtual pitching will be conducted through online video conferencing platforms. Teams will present their projects to judges via screen sharing and live demonstrations.',
    },
  ],
  physical: [
    {
      question: 'What can be the team size in AVISHKAAR SEASON 3?',
      answer: 'Teams can consist of 2-4 members for AVISHKAAR SEASON 3. Individual participation is not allowed, and teams cannot exceed 4 members.',
    },
    {
      question: 'Is there any security provided for our projects?',
      answer: 'Yes, adequate security measures will be in place to protect your projects and equipment during the Physical Hackathon. Secure storage facilities will be provided.',
    },
    {
      question: 'Food & Accommodation provision?',
      answer: 'Food will be provided during the hackathon duration. Accommodation arrangements can be made upon request with prior notice to the organizing committee.',
    },
    {
      question: 'Can a team consist of students from different domains?',
      answer: 'Yes, interdisciplinary teams are encouraged. Students from different academic domains can form teams together to bring diverse perspectives to their projects.',
    },
    {
      question: 'Is there any registration fee?',
      answer: 'No, there is no registration fee for participating in AVISHKAAR SEASON 3. The event is free for all eligible participants.',
    },
    {
      question: 'What are the criteria for evaluation?',
      answer: 'Projects will be evaluated based on innovation, technical implementation, feasibility, presentation quality, and potential impact. Detailed rubrics will be shared with participants.',
    },
    {
      question: 'Will hardware support be available during the Physical Hackathon?',
      answer: 'Yes, basic hardware components and development boards will be available. However, teams are encouraged to bring their own specialized hardware if needed.',
    },
    {
      question: 'Do participants have to arrange their own travel?',
      answer: 'Yes, participants are responsible for arranging their own travel to the hackathon venue. Travel reimbursement may be available for selected teams based on specific criteria.',
    },
  ],
};

const FAQItem = ({ question, answer, isOpen, onClick }) => (
  <motion.div
    className="mb-4 "
    variants={fadeIn('up', 'spring', 0.1, 0.5)}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.3 }}
  >
    <button
      className={`w-full bg-transparent p-5 text-gray-400 text-base text-left cursor-pointer flex justify-between items-center transition-colors duration-300 border-b border-slate-700 hover:border-cyan-400/50 ${isOpen ? 'border-cyan-400' : ''}`}
      onClick={onClick}
    >
      <span className="pr-4">{question}</span>
      <span className={`text-cyan-400 text-2xl font-light transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-45' : ''}`}>
        +
      </span>
    </button>
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="overflow-hidden bg-slate-900/30 mx-[7px]"
        >
          <p className="p-5 text-cyan-400 text-sm leading-relaxed ">{answer}</p>
        </motion.div>
      )}
    </AnimatePresence>
  </motion.div>
);

export default function QuestionAsked() {
  const [openFAQ, setOpenFAQ] = useState(null);

  const handleToggle = (id) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <div className="bg-[#020617] py-20">
      <div className="container mx-auto px-8 sm:px-12 lg:px-16">
        <motion.h1
          variants={textVariant()}
          className="text-4xl md:text-5xl font-bold text-cyan-400 mb-16 text-center"
          style={{ fontFamily: 'Orbitron, sans-serif' }}
        >
          Frequently Asked Questions
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-8 m-[2rem] md:m-[0rem]">
          <div >
            <motion.h2 variants={fadeIn('up', 'tween', 0.2, 0.5)} className="text-2xl md:text-3xl font-bold text-white mb-8" style={{ fontFamily: 'Orbitron, sans-serif' }}>
              Virtual Hackathon
            </motion.h2>
            <div >
              {faqData.virtual.map((faq, index) => (
                <FAQItem key={`virtual-${index}`} {...faq} isOpen={openFAQ === `virtual-${index}`} onClick={() => handleToggle(`virtual-${index}`)} />
              ))}
            </div>
          </div>
          <div>
            <motion.h2 variants={fadeIn('up', 'tween', 0.3, 0.5)} className="text-2xl md:text-3xl font-bold text-white mb-8" style={{ fontFamily: 'Orbitron, sans-serif' }}>
              Physical Hackathon
            </motion.h2>
            <div>
              {faqData.physical.map((faq, index) => (
                <FAQItem key={`physical-${index}`} {...faq} isOpen={openFAQ === `physical-${index}`} onClick={() => handleToggle(`physical-${index}`)} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
