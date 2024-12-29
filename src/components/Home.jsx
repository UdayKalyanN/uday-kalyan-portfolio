// Home.jsx
import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { FaArrowDown, FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link as ScrollLink } from 'react-scroll';
import About from './About';
import Contact from './Contact';
import Experience from './Experience';
import Projects from './Projects';
import Skills from './Skills';

const TypewriterRole = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const roles = ["Backend Developer", "Software Engineer", "Java Enthusiast"];
  
  useEffect(() => {
    let timer;
    const currentWord = roles[wordIndex];
    
    if (isDeleting) {
      timer = setTimeout(() => {
        setDisplayedText(currentWord.substring(0, displayedText.length - 1));
        if (displayedText.length === 0) {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % roles.length);
        }
      }, 50);
    } else {
      timer = setTimeout(() => {
        setDisplayedText(currentWord.substring(0, displayedText.length + 1));
        if (displayedText.length === currentWord.length) {
          timer = setTimeout(() => {
            setIsDeleting(true);
          }, 1500);
        }
      }, 100);
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, wordIndex, roles]);

  return (
    <div className="inline-flex items-center min-w-[250px] h-8">
      <span className="text-accent font-mono">
        {displayedText}
        <span className="animate-pulse ml-0.5 text-accent">|</span>
      </span>
    </div>
  );
};

const Hero = () => {
  const techStack = ['Java', 'Spring Boot', 'Microservices', 'AWS'];
  
  return (
    <section className="min-h-screen flex items-center justify-center bg-background-dark relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent"></div>
      <div className="absolute inset-0 grid-pattern opacity-10"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-8">
            {/* Role Banner */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block"
            >
              <div className="bg-surface px-6 py-3 rounded-full inline-flex items-center gap-2">
                <span className="text-white/80">Hello, I'm a</span>
                <TypewriterRole />
              </div>
            </motion.div>

            {/* Name */}
            <motion.h1 
              className="text-5xl md:text-7xl font-bold tracking-tight"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span className="text-text-primary">Uday Kalyan</span>{' '}
              <span className="text-accent">Nuthalapati</span>
            </motion.h1>

            {/* Tech Stack */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap justify-center gap-3"
            >
              {techStack.map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="px-6 py-2 bg-surface text-accent rounded-full text-sm border border-white/10"
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-text-secondary text-lg max-w-3xl mx-auto leading-relaxed"
            >
              A passionate backend developer specializing in building scalable 
              microservices and distributed systems. Teaching Assistant at 
              <span className="text-accent"> University of North Texas</span>, 
              helping shape tomorrow's engineers.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <ScrollLink to="projects" smooth={true} duration={500}>
                <button className="group px-8 py-3 bg-accent hover:bg-accent-light text-background-dark rounded-full flex items-center gap-2 transition-all">
                  View Projects
                  <FaArrowDown className="group-hover:animate-bounce" />
                </button>
              </ScrollLink>
              
              <a 
                href="https://drive.google.com/file/d/1t5jqRUAQHl0bU9m6s3ZdNSNn19eK4gIs/view" 
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 border border-accent text-accent hover:bg-accent/10 rounded-full transition-all"
              >
                Download Resume
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex justify-center gap-6 pt-8"
            >
              {[
                { icon: FaGithub, href: "https://github.com/UdayKalyanN" },
                { icon: FaLinkedin, href: "https://www.linkedin.com/in/uday-kalyan-nuthalapati/" },
                { icon: FaEnvelope, href: "mailto:udaykalyannuthalapati1999@gmail.com" }
              ].map(({ icon: Icon, href }) => (
                <motion.a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-secondary hover:text-accent transition-all p-2"
                  whileHover={{ scale: 1.1 }}
                >
                  <Icon size={28} />
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <ScrollLink to="about" smooth={true} duration={500}>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="cursor-pointer text-text-secondary hover:text-accent transition-colors"
          >
            <FaArrowDown size={24} />
          </motion.div>
        </ScrollLink>
      </motion.div>
    </section>
  );
};

const Home = () => {
  return (
    <main className="bg-background-dark font-lucida">
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </main>
  );
};

export default Home;