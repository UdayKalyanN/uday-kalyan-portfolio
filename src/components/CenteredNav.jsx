// CenteredNav.jsx
import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

const Logo = () => {
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button onClick={handleClick} className="cursor-pointer group">
      <div className="flex items-center">
        <span className="font-mono text-lg flex items-center">
          <span className="text-[#FFB799] opacity-70">&lt;</span>
          <span className="text-white mx-1 font-['Dancing_Script'] text-2xl tracking-wider transform group-hover:scale-105 transition-all duration-300">
            Uday Kalyan
          </span>
          <span className="text-[#FFB799] opacity-70">/&gt;</span>
        </span>
      </div>
    </button>
  );
};


const CenteredNav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigation = [
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Experience', to: 'experience' },
    { name: 'Projects', to: 'projects' },
    { name: 'Contact', to: 'contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = ['hero', ...navigation.map(nav => nav.to)];
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

  return (
    <>
      <motion.nav 
        className={`fixed w-full z-50 transition-all duration-300
          ${isScrolled 
            ? 'py-3 bg-[#1A1A1A]/95 backdrop-blur-md shadow-lg' 
            : 'py-5 bg-transparent'
          }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <Logo />

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <ScrollLink
                  key={item.to}
                  to={item.to}
                  smooth={true}
                  duration={500}
                  spy={true}
                  className="relative group"
                >
                  <span className={`text-sm tracking-wide transition-colors duration-300
                    ${activeSection === item.to 
                      ? 'text-[#FFB799] font-medium' 
                      : 'text-gray-400 group-hover:text-white'
                    }`}
                  >
                    {item.name}
                  </span>
                  {activeSection === item.to && (
                    <motion.div
                      className="absolute -bottom-2 left-0 w-full h-0.5 bg-[#FFB799] rounded-full"
                      layoutId="navbar-indicator"
                      transition={{ type: "spring", duration: 0.6 }}
                    />
                  )}
                </ScrollLink>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-gray-400 hover:text-white transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <motion.span 
                  animate={{ 
                    transform: isMobileMenuOpen ? "rotate(45deg) translate(5px, 5px)" : "rotate(0) translate(0, 0)",
                  }}
                  className="w-full h-0.5 bg-current transform origin-left transition-all duration-300" 
                />
                <motion.span 
                  animate={{ 
                    opacity: isMobileMenuOpen ? 0 : 1,
                    width: isMobileMenuOpen ? "0%" : "100%"
                  }}
                  className="w-full h-0.5 bg-current transition-all duration-300" 
                />
                <motion.span 
                  animate={{ 
                    transform: isMobileMenuOpen ? "rotate(-45deg) translate(5px, -5px)" : "rotate(0) translate(0, 0)",
                  }}
                  className="w-full h-0.5 bg-current transform origin-left transition-all duration-300" 
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-[#1A1A1A]/95 backdrop-blur-md border-t border-white/10"
            >
              <div className="container mx-auto px-4 py-4">
                {navigation.map((item) => (
                  <ScrollLink
                    key={item.to}
                    to={item.to}
                    smooth={true}
                    duration={500}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block py-3 text-sm transition-colors
                      ${activeSection === item.to 
                        ? 'text-[#FFB799] font-medium' 
                        : 'text-gray-400 hover:text-white'
                      }`}
                  >
                    {item.name}
                  </ScrollLink>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
      <div className={`h-16 ${isScrolled ? 'md:h-14' : 'md:h-20'}`} />
    </>
  );
};

export default CenteredNav;