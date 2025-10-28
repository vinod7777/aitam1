import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from './util/motion';

const Footer = () => {
  const handleContactClick = (type, value) => {
    // In a real application, you would uncomment the following lines
    // to handle phone calls and emails.
    if (type === 'tel') {
      console.log(`Calling: ${value}`);
      // window.location.href = `tel:${value}`;
    } else if (type === 'mailto') {
      console.log(`Emailing: ${value}`);
      // window.location.href = `mailto:${value}`;
    }
  };

  return (
    <>
      <footer className="bg-[#020617] text-slate-400 pt-12 font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-10 md:gap-16">
          <motion.div
            variants={fadeIn('up', 'spring', 0.1, 0.6)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col"
          >
            <h3 className="text-white text-xl font-semibold mb-6 relative after:content-[''] after:absolute after:bottom-[-0.5rem] after:left-0 after:w-[50px] after:h-[2px] after:bg-sky-500">Quick Links</h3>
            <nav className="flex flex-col gap-3">
              <a href="#" className="text-sm text-slate-400 no-underline transition-colors duration-300 hover:text-sky-500 active:translate-x-1">Home</a>
              <a href="#" className="text-sm text-slate-400 no-underline transition-colors duration-300 hover:text-sky-500 active:translate-x-1">About Us</a>
              <a href="#" className="text-sm text-slate-400 no-underline transition-colors duration-300 hover:text-sky-500 active:translate-x-1">Login</a>
              <a href="#" className="text-sm text-slate-400 no-underline transition-colors duration-300 hover:text-sky-500 active:translate-x-1">Register</a>
              <a href="#" className="text-sm text-slate-400 no-underline transition-colors duration-300 hover:text-sky-500 active:translate-x-1">Team</a>
              <a href="#" className="text-sm text-slate-400 no-underline transition-colors duration-300 hover:text-sky-500 active:translate-x-1">Tracks</a>
            </nav>
          </motion.div>

          <motion.div
            variants={fadeIn('up', 'spring', 0.2, 0.6)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col"
          >
            <h3 className="text-white text-xl font-semibold mb-6 relative after:content-[''] after:absolute after:bottom-[-0.5rem] after:left-0 after:w-[50px] after:h-[2px] after:bg-sky-500">Contact Us</h3>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3 text-sm leading-snug cursor-pointer" onClick={() => handleContactClick('tel', '+917386759626')}>
                <svg className="w-4 h-4 text-sky-500 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
                <span>K.Kranthi Kiran : +91 7386759626</span>
                <svg className="w-4 h-4 text-green-500 shrink-0 ml-2 mt-0.5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.516" />
                </svg>
              </div>

              <div className="flex items-start gap-3 text-sm leading-snug cursor-pointer" onClick={() => handleContactClick('tel', '+919704279188')}>
                <svg className="w-4 h-4 text-sky-500 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
                <span>S Vinod Kumar : +91 9866854604</span>
                <svg className="w-4 h-4 text-green-500 shrink-0 ml-2 mt-0.5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.516" />
                </svg>
              </div>

              <div className="flex items-start gap-3 text-sm leading-snug">
                <svg className="w-4 h-4 text-sky-500 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
                <div className="flex flex-col gap-1">
                  <span>Aditya Institute of Technology And Management,</span>
                  <span>Tekkali</span>
                </div>
              </div>

              <div className="flex items-start gap-3 text-sm leading-snug cursor-pointer" onClick={() => handleContactClick('mailto', 'avishkaar@adityatekkali.edu.in')}>
                <svg className="w-4 h-4 text-sky-500 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
                <span>avishkaar@adityatekkali.edu.in</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn('up', 'spring', 0.3, 0.6)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col md:items-center"
          >
            <h3 className="text-white text-xl font-semibold mb-6 relative after:content-[''] after:absolute after:bottom-[-0.5rem] after:left-0 after:w-[50px] after:h-[2px] after:bg-sky-500">Follow Us</h3>
            <div className="flex gap-4">
              <a href="#" className="flex items-center justify-center w-10 h-10 bg-slate-800 rounded-full text-slate-400 no-underline transition-all duration-300 border border-slate-700 hover:bg-sky-500 hover:text-white hover:-translate-y-0.5 hover:shadow-lg hover:shadow-sky-500/30" aria-label="Instagram">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a href="#" className="flex items-center justify-center w-10 h-10 bg-slate-800 rounded-full text-slate-400 no-underline transition-all duration-300 border border-slate-700 hover:bg-sky-500 hover:text-white hover:-translate-y-0.5 hover:shadow-lg hover:shadow-sky-500/30" aria-label="LinkedIn">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a href="#" className="flex items-center justify-center w-10 h-10 bg-slate-800 rounded-full text-slate-400 no-underline transition-all duration-300 border border-slate-700 hover:bg-sky-500 hover:text-white hover:-translate-y-0.5 hover:shadow-lg hover:shadow-sky-500/30" aria-label="YouTube">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
              <a href="#" className="flex items-center justify-center w-10 h-10 bg-slate-800 rounded-full text-slate-400 no-underline transition-all duration-300 border border-slate-700 hover:bg-sky-500 hover:text-white hover:-translate-y-0.5 hover:shadow-lg hover:shadow-sky-500/30" aria-label="WhatsApp">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.516" />
                </svg>
              </a>
            </div>
          </motion.div>
        </div>

        <div className="mt-8 py-6 border-t border-slate-800 text-center">
          <p className="text-[0.8rem] font-bold hover:text-[0.9rem] transition-all duration-300 cursor-pointer text-slate-500 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 " style={{ fontFamily:"'Orbitron', sans-serif"}}>
            Copyrights © 2025 Designed and developed by
            <span className="text-sky-500 font-medium"> Bhargav</span>,
            <span className="text-sky-500 font-medium"> Vinod kumar</span> and
            <span className="text-sky-500 font-medium"> Vinod kumar</span> From
            <span className="text-sky-500 font-medium"> SSC</span>. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
// Add smooth scrolling for footer links
document.addEventListener('DOMContentLoaded', function() {
  const footerLinks = document.querySelectorAll('.footer-link');
  
  footerLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      // Add a subtle click effect
      this.style.transform = 'translateX(5px)';
      setTimeout(() => {
        this.style.transform = 'translateX(0)';
      }, 150);
      
      console.log(`Navigating to: ${this.textContent}`);
    });
  });

  // Add hover effects for social links
  const socialLinks = document.querySelectorAll('.social-link');
  
  socialLinks.forEach(link => {
    link.addEventListener('mouseenter', function() {
      this.style.boxShadow = '0 4px 12px rgba(88, 166, 255, 0.3)';
    });
    
    link.addEventListener('mouseleave', function() {
      this.style.boxShadow = 'none';
    });
    
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const platform = this.getAttribute('aria-label');
      console.log(`Opening ${platform} profile`);
    });
  });

  // Add click handlers for contact items
  const contactItems = document.querySelectorAll('.contact-item');
  
  contactItems.forEach(item => {
    const phoneRegex = /\+91\s\d{10}/;
    const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/;
    const text = item.textContent;
    
    if (phoneRegex.test(text)) {
      item.style.cursor = 'pointer';
      item.addEventListener('click', function() {
        const phoneNumber = text.match(phoneRegex)[0].replace(/\s/g, '');
        console.log(`Calling: ${phoneNumber}`);
        // In a real application, you might use: window.location.href = `tel:${phoneNumber}`;
      });
    }
    
    if (emailRegex.test(text)) {
      item.style.cursor = 'pointer';
      item.addEventListener('click', function() {
        const email = text.match(emailRegex)[0];
        console.log(`Emailing: ${email}`);
        // In a real application, you might use: window.location.href = `mailto:${email}`;
      });
    }
  });

  // Add animation on scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  // Observe footer sections for animation
  const footerSections = document.querySelectorAll('.footer-section');
  footerSections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
  });
});
