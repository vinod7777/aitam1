import React, { useState } from 'react';
import { Menu, Eye, EyeOff } from 'lucide-react';
import signup  from '../assets/signup.webp';
import login from '../assets/signup.webp';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Register = ({ onSubmit }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    teamName: '',
    teamCount: '',
    collegeName: '',
    stateName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(formData);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div>

      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-20px); }
          }
          .floating-image { animation: float 6s ease-in-out infinite; }
        `}
      </style>

      {/* Main Content */}
      <motion.div
        className="flex items-center justify-center gap-12 bg-[#020618] px-10 sm:px-8 md:px-10 py-20"
        initial="hidden"
        animate="show"
        variants={{ show: { transition: { staggerChildren: 0.2 } } }}
      >
        {/* Sign Up Form */}
        <motion.div className="w-full max-w-md bg-[#020618] rounded-3xl px-6 py-4 border border-cyan-400/30 shadow-2xl shadow-cyan-400/20"
          key="register"
          variants={{ hidden: { opacity: 0, x: -50 }, show: { opacity: 1, x: 0 } }}
          transition={{ duration: 0.8 }}>
          <h1 className="text-4xl font-bold text-center mb-2 text-cyan-400" style={{ fontFamily: "'Orbitron', sans-serif" }}>
            Sign Up
          </h1>
          <p className="text-center text-gray-400 mb-4 text-sm" style={{ fontFamily: "'Rajdhani', sans-serif" }}>
            Join Avishkaar! Sign up to ignite your journey of innovation.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Team Name and Team Members Count */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm mb-2 text-gray-300">Team Name</label>
                <input type="text" name="teamName" placeholder="Enter team name" value={formData.teamName} onChange={handleChange} className="w-full bg-[#1a1f3a] border border-cyan-900/30 rounded-lg px-4 py-3 text-sm text-gray-300 placeholder-gray-600 focus:outline-none focus:border-cyan-500" />
              </div>
              <div>
                <label className="block text-sm mb-2 text-gray-300">Team Members Count</label>
                <select name="teamCount" value={formData.teamCount} onChange={handleChange} className="w-full bg-[#1a1f3a] border border-cyan-900/30 rounded-lg px-4 py-3 text-sm text-gray-300 focus:outline-none focus:border-cyan-500">
                  <option value="">Team Count</option>
                  {[1, 2, 3, 4].map(i => <option key={i} value={i}>{i}</option>)}
                </select>
              </div>
            </div>

            {/* College Name and State Name */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm mb-2 text-gray-300">College Name</label>
                <input type="text" name="collegeName" placeholder="Enter college name" value={formData.collegeName} onChange={handleChange} className="w-full bg-[#1a1f3a] border border-cyan-900/30 rounded-lg px-4 py-3 text-sm text-gray-300 placeholder-gray-600 focus:outline-none focus:border-cyan-500" />
              </div>
              <div>
                <label className="block text-sm mb-2 text-gray-300">State Name</label>
                <select name="stateName" value={formData.stateName} onChange={handleChange} className="w-full bg-[#1a1f3a] border border-cyan-900/30 rounded-lg px-4 py-3 text-sm text-gray-300 focus:outline-none focus:border-cyan-500">
                  <option value="">Select a state</option>
                  <option value="Andhra Pradesh">Andhra Pradesh</option>
                  <option value="Karnataka">Karnataka</option>
                  <option value="Tamil Nadu">Tamil Nadu</option>
                  <option value="Telangana">Telangana</option>
                </select>
              </div>
            </div>

           
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm mb-2 text-gray-300">Email</label>
                <input type="email" name="email" placeholder="your@gmail.com" value={formData.email} onChange={handleChange} className="w-full bg-[#1a1f3a] border border-cyan-900/30 rounded-lg px-4 py-3 text-sm text-gray-300 placeholder-gray-600 focus:outline-none focus:border-cyan-500" />
              </div>
              <div>
                <label className="block text-sm mb-2 text-gray-300">Password</label>
                <div className="relative">
                  <input type={showPassword ? 'text' : 'password'} name="password" placeholder="Enter Your Password" value={formData.password} onChange={handleChange} className="w-full bg-[#1a1f3a] border border-cyan-900/30 rounded-lg px-4 py-3 pr-10 text-sm text-gray-300 placeholder-gray-600 focus:outline-none focus:border-cyan-500" />
                  <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>
            </div>

            <div className="col-span-2">
              <label className="block text-sm mb-2 text-gray-300">Confirm Password</label>
              <div className="relative">
                <input type={showConfirmPassword ? 'text' : 'password'} name="confirmPassword" placeholder="Confirm Your Password" value={formData.confirmPassword} onChange={handleChange} className="w-full bg-[#1a1f3a] border border-cyan-900/30 rounded-lg px-4 py-3 pr-10 text-sm text-gray-300 placeholder-gray-600 focus:outline-none focus:border-cyan-500" />
                <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
                  {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

         
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-cyan-500 hover:to-teal-500 text-white font-semibold py-3 rounded-lg transition-all duration-300 mt-4"
            >
              Sign Up
            </button>

        
            <p className="text-center text-sm text-gray-400 mt-4">
              Already have an account?{' '}
              <Link to="/login" className="text-cyan-400 hover:text-cyan-300">Sign in</Link>
            </p>
          </form>
        </motion.div>

    
        <motion.div
          key="register-image"
          variants={{ hidden: { opacity: 0, scale: 0.8 }, show: { opacity: 1, scale: 1 } }}
          transition={{ duration: 0.8 }}
          className="hidden lg:block relative"
        >
          <div className="relative">
            <img
              src={signup}
              alt="Avishkaar Mascot"
              className="w-96  top-10 h-auto relative z-10 floating-image filter drop-shadow-[0_0_15px_rgba(0,255,255,0.4)]"
            />

            <div className="absolute top-96 left-1/2 -translate-x-1/2 w-80 h-40">
              <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/30 to-transparent rounded-full blur-2xl animate-pulse"></div>
              <svg viewBox="0 0 200 60" className="w-full h-full">
                <defs>
                  <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                    <feMerge>
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>
                <g style={{ filter: 'url(#glow)' }}>
                  <ellipse cx="100" cy="30" rx="90" ry="25" fill="none" stroke="cyan" strokeWidth="2" opacity="0.6" />
                  <ellipse cx="100" cy="30" rx="70" ry="18" fill="none" stroke="cyan" strokeWidth="1.5" opacity="0.4" />
                  <ellipse cx="100" cy="30" rx="50" ry="12" fill="cyan" fillOpacity="0.2" />
                </g>
              </svg>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Register;