import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import login from '../assets/signup.webp'; 
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Login = ({ onSubmit }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(formData);
    }
    console.log('Login Data:', formData);
   
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <motion.div
      className="flex items-center justify-center gap-12 bg-[#020618] px-10 sm:px-8 md:px-10 py-16"
      initial="hidden"
      animate="show"
      variants={{ show: { transition: { staggerChildren: 0.2 } } }}
    >
     
      <motion.div
        className="w-full max-w-md bg-[#020618] rounded-3xl p-6 border border-cyan-400/30 shadow-2xl shadow-cyan-400/20 lg:order-2 lg:mt-20"
        key="login"
        variants={{ hidden: { opacity: 0, x: 50 }, show: { opacity: 1, x: 0 } }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl font-bold text-center mb-2 text-cyan-400" style={{ fontFamily: "'Orbitron', sans-serif" }}>
          Sign In
        </h1>
        <p className="text-center text-gray-400 mb-4 text-sm" style={{ fontFamily: "'Rajdhani', sans-serif" }}>
          Welcome back! Sign in to continue.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
         
          <div>
            <label className="block text-sm mb-2 text-gray-300">Email</label>
            <input
              type="email"
              name="email"
              placeholder="your@gmail.com"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-[#1a1f3a] border border-cyan-900/30 rounded-lg px-4 py-3 text-sm text-gray-300 placeholder-gray-600 focus:outline-none focus:border-cyan-500"
            />
          </div>

         
          <div>
            <label className="block text-sm mb-2 text-gray-300">Password</label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder="Enter Your Password"
                value={formData.password}
                onChange={handleChange}
                className="w-full bg-[#1a1f3a] border border-cyan-900/30 rounded-lg px-4 py-3 pr-10 text-sm text-gray-300 placeholder-gray-600 focus:outline-none focus:border-cyan-500"
              />
              <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-cyan-500 hover:to-teal-500 text-white font-semibold py-3 rounded-lg transition-all duration-300 mt-4"
          >
            Sign In
          </button>

          <p className="text-center text-sm text-gray-400 mt-4">
            Don't have an account?{' '}
            <Link to="/register" className="text-cyan-400 hover:text-cyan-300">Sign up</Link>
          </p>
        </form>
      </motion.div>

      
      <motion.div
        key="login-image"
        variants={{ hidden: { opacity: 0, scale: 0.8 }, show: { opacity: 1, scale: 1 } }}
        transition={{ duration: 0.8 }}
        className="hidden lg:block relative lg:order-1"
      >
        <div className="relative">
          <img
            src={login}
            alt="Avishkaar Mascot"
            className="w-96 top-10 h-auto relative z-10 floating-image filter drop-shadow-[0_0_15px_rgba(0,255,255,0.4)]"
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
  );
};

export default Login;