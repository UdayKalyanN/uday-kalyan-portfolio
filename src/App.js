import React, { useState } from 'react';
import { HashRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import Home from './components/Home';

const AnimatedLogo = () => (
  <Link to="/" className="text-2xl font-bold text-blue-600 flex items-center">
    <motion.span
      className="inline-block"
      initial={{ rotate: 0 }}
      animate={{ rotate: 360 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      U
    </motion.span>
    <motion.span
      className="inline-block"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.5 }}
    >
      K
    </motion.span>
    <motion.span
      className="inline-block"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 0.4, duration: 0.5, type: "spring" }}
    >
      N
    </motion.span>
  </Link>
);

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-gray-100 text-gray-900">
        <nav className="bg-white text-gray-800 shadow-md sticky top-0 z-50">
          <div className="container mx-auto px-4 py-3 flex justify-between items-center">
            <AnimatedLogo />
            <div className="hidden md:flex space-x-6">
              <NavLink to="hero">Home</NavLink>
              <NavLink to="about">About</NavLink>
              <NavLink to="skills">Skills</NavLink>
              <NavLink to="experience">Experience</NavLink>
              <NavLink to="projects">Projects</NavLink>
              <NavLink to="contact">Contact</NavLink>
            </div>
            <button onClick={() => setIsOpen(!isOpen)} className="md:hidden focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </nav>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden bg-white text-gray-800 p-4 shadow-lg"
            >
              <MobileNavLink to="hero" onClick={() => setIsOpen(false)}>Home</MobileNavLink>
              <MobileNavLink to="about" onClick={() => setIsOpen(false)}>About</MobileNavLink>
              <MobileNavLink to="skills" onClick={() => setIsOpen(false)}>Skills</MobileNavLink>
              <MobileNavLink to="experience" onClick={() => setIsOpen(false)}>Experience</MobileNavLink>
              <MobileNavLink to="projects" onClick={() => setIsOpen(false)}>Projects</MobileNavLink>
              <MobileNavLink to="contact" onClick={() => setIsOpen(false)}>Contact</MobileNavLink>
            </motion.div>
          )}
        </AnimatePresence>

        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>

        <footer className="bg-gray-800 text-white p-4 text-center">
          <p>&copy; 2024 Uday Kalyan Nuthalapati. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
};

const NavLink = ({ to, children }) => (
  <ScrollLink
    to={to}
    smooth={true}
    duration={500}
    className="hover:text-blue-600 transition duration-300 cursor-pointer"
  >
    {children}
  </ScrollLink>
);

const MobileNavLink = ({ to, onClick, children }) => (
  <ScrollLink
    to={to}
    smooth={true}
    duration={500}
    onClick={onClick}
    className="block py-2 hover:text-blue-600 transition duration-300 cursor-pointer"
  >
    {children}
  </ScrollLink>
);

export default App;