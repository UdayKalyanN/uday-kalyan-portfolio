import { motion } from 'framer-motion';
import React from 'react';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link as ScrollLink } from 'react-scroll';
import About from './About';
import Contact from './Contact';
import Experience from './Experience';
import Projects from './Projects';
import Skills from './Skills';

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
            {/* <img
              src={`${process.env.PUBLIC_URL}/profile.JPEG`}
              alt="Uday Kalyan Nuthalapati"
              className="w-48 h-48 rounded-full mx-auto border-4 border-white shadow-lg"
            /> */}
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
            Backend Developer | Java Enthusiast | Problem Solver
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="space-x-4 mb-8"
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
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="flex justify-center space-x-6"
          >
            <a href="https://github.com/UdayKalyanN" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-200">
              <FaGithub size={24} />
            </a>
            <a href="https://www.linkedin.com/in/uday-kalyan-nuthalapati/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-200">
              <FaLinkedin size={24} />
            </a>
            <a href="mailto:udaykalyannuthalapati1999@gmail.com" className="text-white hover:text-blue-200">
              <FaEnvelope size={24} />
            </a>
          </motion.div>
        </div>
      </motion.section>

      <Divider />

      <Section id="quick-intro" bgColor="bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Welcome to My Portfolio</h2>
          <p className="text-lg mb-8">
          I'm a passionate Java Backend Developer with expertise in building robust, scalable applications. 
          With a strong foundation in computer science and hands-on industry experience, 
          I bring a unique blend of theoretical knowledge and practical skills to every project I undertake.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-blue-100 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Frontend Development</h3>
              <p>Creating responsive and intuitive user interfaces using React and modern CSS frameworks.</p>
            </div>
            <div className="bg-purple-100 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Backend Development</h3>
              <p>Building robust server-side applications with Java, Spring Boot, and RESTful APIs.</p>
            </div>
            <div className="bg-green-100 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Database Management</h3>
              <p>Designing and optimizing database systems using SQL and NoSQL technologies.</p>
            </div>
          </div>
        </div>
      </Section>

      <Divider />

      <Section id="about" bgColor="bg-gray-100">
        <About />
      </Section>

      <Divider />

      <Section id="skills" bgColor="bg-white">
        <Skills />
      </Section>

      <Divider />

      <Section id="experience" bgColor="bg-gray-100">
        <Experience />
      </Section>

      <Divider />

      <Section id="projects" bgColor="bg-white">
        <Projects />
      </Section>

      <Divider />

      <Section id="contact" bgColor="bg-gray-100">
        <Contact />
      </Section>
    </div>
  );
};

export default Home;