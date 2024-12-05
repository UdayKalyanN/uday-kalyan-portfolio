import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';

const CenteredNav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isOpen, setIsOpen] = useState(false);
  const { scrollYProgress } = useScroll();

  // Progress bar width animation
  const progressWidth = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  // Handle scroll effect and active section
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Find active section based on scroll position
      const sections = ['hero', 'about', 'skills', 'experience', 'projects', 'contact'];
      for (let section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'HOME', to: 'hero', icon: '🏠' },
    { name: 'ABOUT', to: 'about', icon: '👤' },
    { name: 'SKILLS', to: 'skills', icon: '💻' },
    { name: 'EXPERIENCE', to: 'experience', icon: '💼' },
    { name: 'PROJECTS', to: 'projects', icon: '🚀' },
    { name: 'CONTACT', to: 'contact', icon: '✉️' },
  ];

  // Advanced animation variants
  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20
      }
    }
  };

  const itemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: (custom) => ({
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        delay: custom * 0.1
      }
    })
  };

  return (
    <>
      <motion.nav 
        initial="hidden"
        animate="visible"
        variants={navVariants}
        className={`fixed w-full z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-white/80 backdrop-blur-lg shadow-lg' 
            : 'bg-transparent'
        }`}
      >
        {/* Progress Bar */}
        <motion.div 
          className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
          style={{ width: progressWidth }}
        />

        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center py-4">
            {/* Logo with gradient styling and home link */}
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="mb-6"
            >
              <ScrollLink
                to="hero"
                smooth={true}
                duration={500}
                className="relative group text-3xl font-light tracking-[0.3em] bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600 cursor-pointer"
              >
                UKN
                <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </ScrollLink>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  custom={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ScrollLink
                    to={item.to}
                    smooth={true}
                    duration={500}
                    className={`relative group flex flex-col items-center`}
                  >
                    <span className={`text-sm tracking-widest transition-all duration-300 ${
                      isScrolled ? 'text-black' : 'text-black'
                    } ${activeSection === item.to ? 'font-medium' : 'font-light'}`}>
                      {item.name}
                    </span>
                    
                    {/* Active indicator and hover effect */}
                    <span className={`absolute -bottom-2 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-all duration-300 ${
                      activeSection === item.to ? 'w-full' : 'w-0 group-hover:w-full'
                    }`} />
                    
                    {/* Icon tooltip on hover */}
                    <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-sm py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      {item.icon}
                    </span>
                  </ScrollLink>
                </motion.div>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className={`md:hidden absolute right-4 top-4 p-2 rounded-lg transition-all duration-300 ${
                isScrolled ? 'text-black hover:bg-gray-100' : 'text-black hover:bg-white/10'
              }`}
            >
              <motion.div
                animate={isOpen ? "open" : "closed"}
                className="w-6 h-6 relative"
              >
                <motion.span
                  className={`absolute h-0.5 w-6 transform transition-all duration-300 bg-black`}
                  style={{ top: "50%" }}
                  variants={{
                    open: { rotate: 45, y: 0 },
                    closed: { rotate: 0, y: -8 }
                  }}
                />
                <motion.span
                  className={`absolute h-0.5 w-6 bg-black`}
                  style={{ top: "50%" }}
                  variants={{
                    open: { opacity: 0 },
                    closed: { opacity: 1 }
                  }}
                />
                <motion.span
                  className={`absolute h-0.5 w-6 transform transition-all duration-300 bg-black`}
                  style={{ top: "50%" }}
                  variants={{
                    open: { rotate: -45, y: 0 },
                    closed: { rotate: 0, y: 8 }
                  }}
                />
              </motion.div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200"
            >
              <div className="container mx-auto px-4 py-4">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <ScrollLink
                      to={item.to}
                      smooth={true}
                      duration={500}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center space-x-4 py-3 px-4 rounded-lg transition-all duration-300 ${
                        activeSection === item.to 
                          ? 'bg-gray-100 text-blue-600' 
                          : 'hover:bg-gray-50 text-black'
                      }`}
                    >
                      <span className="text-xl">{item.icon}</span>
                      <span className="text-sm tracking-widest">{item.name}</span>
                    </ScrollLink>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Spacer for fixed navigation */}
      <div className="h-32" />
    </>
  );
};

export default CenteredNav;
