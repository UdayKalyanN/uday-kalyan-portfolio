import React from 'react';
import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import About from './About';
import Skills from './Skills';
import Experience from './Experience';
import Projects from './Projects';
import Contact from './Contact';

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

const Section = ({ id, children, bgColor = "bg-white" }) => (
  <motion.section
    id={id}
    className={`py-20 ${bgColor}`}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    variants={sectionVariants}
  >
    {children}
  </motion.section>
);

const Divider = () => (
  <div className="w-full h-24 bg-gradient-to-b from-gray-100 to-gray-200 flex items-center justify-center">
    <div className="w-2 h-2 bg-blue-500 rounded-full mx-1 animate-pulse"></div>
    <div className="w-2 h-2 bg-blue-500 rounded-full mx-1 animate-pulse delay-100"></div>
    <div className="w-2 h-2 bg-blue-500 rounded-full mx-1 animate-pulse delay-200"></div>
  </div>
);

const Home = () => {
  return (
    <div className="bg-gray-100">
      <motion.section 
        id="hero" 
        className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="container mx-auto px-4 text-center text-white">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <img
              src="/profile.JPEG"
              alt="Uday Kalyan Nuthalapati"
              className="w-48 h-48 rounded-full mx-auto border-4 border-white shadow-lg"
            />
          </motion.div>
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-5xl font-bold mb-4"
          >
            Uday Kalyan Nuthalapati
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-xl mb-8"
          >
            Full-Stack Developer | Java Enthusiast | Problem Solver
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="space-x-4"
          >
            <ScrollLink
              to="about"
              smooth={true}
              duration={500}
              className="bg-white text-blue-600 px-6 py-3 rounded-full hover:bg-blue-100 transition duration-300 inline-block cursor-pointer"
            >
              Learn More
            </ScrollLink>
            <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
              className="bg-blue-700 text-white px-6 py-3 rounded-full hover:bg-blue-800 transition duration-300 inline-block cursor-pointer"
            >
              Contact Me
            </ScrollLink>
          </motion.div>
        </div>
      </motion.section>

      <Divider />

      <Section id="about" bgColor="bg-white">
        <About />
      </Section>

      <Divider />

      <Section id="skills" bgColor="bg-gray-100">
        <Skills />
      </Section>

      <Divider />

      <Section id="experience" bgColor="bg-white">
        <Experience />
      </Section>

      <Divider />

      <Section id="projects" bgColor="bg-gray-100">
        <Projects />
      </Section>

      <Divider />

      <Section id="contact" bgColor="bg-white">
        <Contact />
      </Section>
    </div>
  );
};

export default Home;