import React from 'react'
import Nav from '../components/nav'
import { motion } from 'framer-motion';
import JoinUs from '../components/JoinUs';
import Footer from '../components/footer';
import aksapu from '../assets/team/Akasapu_Gayatri.jpeg';
import bharath from '../assets/team/Bharath_Varma.jpeg';
import ekshitha from '../assets/team/Ekshitha_Lakkoju.jpeg';
import tarun from '../assets/team/Gorribanda_Tarun_Kumar.jpeg';
import chinmay from '../assets/team/Guntuku_Chinmay.jpeg';
import govardhan from '../assets/team/Govardhan_Rao_Vamaravalli.jpeg';
import hari from '../assets/team/Hari_Charan_Agatamudi.jpeg';
import harika from '../assets/team/Harika_Golusu.jpeg';
import harish from '../assets/team/Harish_Sasanapuri.jpeg';
import harshitha from '../assets/team/Harshitha_Nakkala.jpeg';
import jashmin from '../assets/team/Jashmin_Jena.jpeg';
import kancharana from '../assets/team/Kancharana_Durga_Prasad.jpeg';
import kondala from '../assets/team/Kondala_Sravanti.jpeg';
import kowshik from '../assets/team/Kowshik.jpg';
import kranthi from '../assets/team/Kranthi_Kiran_Kelam.jpeg';
import mavk from '../assets/team/MAVK_Raghavan.jpeg';
import mithil from '../assets/team/Mithil.jpeg';
import muddada from '../assets/team/Muddada_Niranjan.jpeg';
import sai from '../assets/team/MV_Sai_Keerthi.jpeg';
import nadipena from '../assets/team/Nadipena_Varunkumar.jpeg';
import patnaikuni from '../assets/team/Patnaikuni_Chandini.jpeg';
import pragathi from '../assets/team/Pragathi_Duggivalasa.jpeg';
import praneeth from '../assets/team/Praneeth.jpeg';
import sahukari from '../assets/team/Sahukari_Siddhartha.jpeg';
import saikamal from '../assets/team/Saikamal_Suro.jpg';
import sanapala from '../assets/team/Sanapala_Haritha.jpeg';
import saranya from '../assets/team/Saranya_Kalivarapu.jpeg';
import sonalika from '../assets/team/Sonalika_Panda.jpeg';
import sowmya from '../assets/team/Tangudu_Sowmya.jpeg';
import thanisha from '../assets/team/Thanisha_Potta.jpeg';
import prasanth from '../assets/team/Thonangi_Prasanth_Kumar.jpg';
import rajeswara from '../assets/team/U_Rajeswara_Rao.jpg';
import vamsi from '../assets/team/Vamsi_Sharma.jpeg';
import yedla from '../assets/team/Yedla_Yaswanth.jpg';

// Placeholder image - you can replace this with actual image paths later
const placeholderImage = 'https://via.placeholder.com/150';

const teamMembers = [
    {
    name: 'Kranthi Kiran Kelam',
    role: 'Convener',
    branch: 'CSM',
    image: kranthi,
  },
    {
    name: 'Harshitha Nakkala',
    role: 'Convener',
    branch: 'CSM',
    image: harshitha,
  },
  {
    name: 'Ekshitha Lakkoju',
    role: 'Co Convener',
    branch: 'CSM',
    image: ekshitha,
  },
  {
    name: 'Sanapala Haritha',
    role: 'Quality Assurance',
    branch: 'CSM',
    image: sanapala,
  },
  {
    name: 'Muddada Niranjan',
    role: 'Quality Assurance',
    branch: 'CSE',
    image: muddada,
  },
  {
    name: 'Harika Golusu',
    role: 'Finance',
    branch: 'EEE',
    image: harika,
  },
  {
    name: 'Sahukari Siddhartha',
    role: 'Promotions',
    branch: 'CSM',
    image: sahukari,
  },
  {
    name: 'Pragathi Duggivalasa',
    role: 'Promotions',
    branch: 'MBA',
    image: pragathi,
  },
  {
    name: 'Saikamal Suro',
    role: 'Promotions',
    branch: 'CSM',
    image: saikamal,
  },
  {
    name: 'Thonangi Prasanth Kumar',
    role: 'Web',
    branch: 'CSD',
    image: prasanth,
  },
  {
    name: 'Bharath Varma',
    role: 'Web',
    branch: 'CSE',
    image: bharath,
  },
  {
    name: 'Mithil',
    role: 'Design',
    branch: 'CSE',
    image: mithil,
  },
  {
    name: 'Praneeth',
    role: 'Design',
    branch: 'CSD',
    image: praneeth,
  },
  {
    name: 'Kowshik',
    role: 'Media',
    branch: 'CSE',
    image: kowshik,
  },
  {
    name: 'MAVK Raghavan',
    role: 'Media',
    branch: 'CSD',
    image: mavk,
  },
  {
    name: 'Guntuku Chinmay',
    role: 'Outreach',
    branch: 'CSD',
    image: chinmay,
  },
  {
    name: 'Hari Charan Agatamudi',
    role: 'Outreach',
    branch: 'CSM',
    image: hari,
  },
  {
    name: 'Govardhan Rao Vamaravalli',
    role: 'Sponsorships',
    branch: 'CSM',
    image: govardhan,
  },
  {
    name: 'MV Sai Keerthi',
    role: 'Sponsorships',
    branch: 'ECE',
    image: sai,
  },
  {
    name: 'Harish Sasanapuri',
    role: 'Art & Creative',
    branch: 'CSM',
    image: harish,
  },
  {
    name: 'Vamsi Sharma',
    role: 'Art & Creative',
    branch: 'CSE',
    image: vamsi,
  },
  {
    name: 'Kondala Sravanti',
    role: 'Entertainment',
    branch: 'CSE',
    image: kondala,
  },
  {
    name: 'Nadipena Varunkumar',
    role: 'Entertainment',
    branch: 'CSM',
    image: nadipena,
  },
  {
    name: 'Kancharana Durga Prasad',
    role: 'Tech Team',
    branch: 'IT',
    image: kancharana,
  },
  {
    name: 'Yedla Yaswanth',
    role: 'Tech Team',
    branch: 'ECE',
    image: yedla,
  },
  {
    name: 'Gorribanda Tarun Kumar',
    role: 'Food & Logistics',
    branch: 'CSE',
    image: tarun,
  },
  {
    name: 'Aswin Kumar Yalla',
    role: 'Food & Logistics',
    branch: 'IT',
    image: kowshik,
  },
  {
    name: 'Thanisha Potta',
    role: 'Travel & Accommodation',
    branch: 'MECH',
    image: thanisha,
  },
  {
    name: 'Saranya Kalivarapu',
    role: 'Travel & Accommodation',
    branch: 'ECE',
    image: saranya,
  },
  {
    name: 'Sonalika Panda',
    role: 'Reporting',
    branch: 'CIVIL',
    image: sonalika,
  },
  {
    name: 'Jashmin Jena',
    role: 'Reporting',
    branch: 'EEE',
    image: jashmin,
  },
  {
    name: 'Patnaikuni Chandini',
    role: 'Registration',
    branch: 'IT',
    image: patnaikuni,
  },
  {
    name: 'Akasapu Gayatri',
    role: 'Registration',
    branch: 'MCA',
    image: aksapu,
  },
  {
    name: 'U Rajeswara Rao',
    role: 'Registration',
    branch: 'CSD',
    image: rajeswara,
  },
  {
    name: 'Tangudu Sowmya',
    role: 'Corporate Relations',
    branch: 'CSD',
    image: sowmya,
  },
];

const TeamCard = ({ name, role, branch, image }) => {
  return (
    <motion.div
      className="relative bg-[#0f172b] rounded-lg p-6 text-center overflow-hidden group transition-all duration-300 hover:shadow-[0_0_20px_rgba(6,182,212,0.5),inset_0_0_15px_rgba(6,182,212,0.2)]"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
    >
      <div className="absolute inset-0 rounded-lg rotating-border-glow opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute inset-[1px] bg-[#020618] rounded-[7px] z-10 transition-shadow duration-500 group-hover:shadow-[inset_0_0_150px_rgba(6,182,212,0.3)]" />
      <div className="relative z-20 flex flex-col items-center">
        <img
          src={image}
          alt={name}
          className="w-full h-76 rounded-md object-cover mb-4 filter grayscale-100 group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
        /> 
        <h3 className="text-xl font-bold text-white mb-1" style={{ fontFamily: 'Orbitron, sans-serif' }}>
          {name}
        </h3>
        <p className="text-cyan-400 text-sm mb-2">{role}</p>
        <p className="text-gray-400 text-xs">{branch}</p>
      </div>
    </motion.div>
  );
};

const Team = () => {
  return (
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
      <div className="min-h-screen bg-[#020618] text-white py-20 px-4 md:px-10">
          <Nav />
        <h1 className="text-4xl md:text-6xl font-bold text-cyan-400 text-center mt-7 mb-4" style={{ fontFamily: 'Orbitron, sans-serif' }}>
          OUR TEAM
        </h1>
        <p className="text-lg md:text-xl text-gray-300 text-center max-w-3xl mx-auto mb-12">
          Meet the passionate individuals powering our mission. Together, we're redefining collaboration.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <TeamCard key={index} {...member} />
          ))}
        </div>
      </div>
    </>
  );
};

export default function TeamPage() {
  return (
    <>
      <Team />
      <JoinUs />
      <Footer />
    </>
  );
}
