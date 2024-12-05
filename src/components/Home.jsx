import { motion, useScroll, useTransform } from 'framer-motion';
import React from 'react';
import { FaArrowDown, FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
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

// Animated Name Component
const AnimatedName = () => {
  const firstName = "Uday Kalyan";
  const lastName = "Nuthalapati";

  return (
    <motion.h1 className="text-3xl sm:text-5xl font-bold mb-4">
      {firstName.split('').map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.5 + i * 0.1,
            ease: "easeOut"
          }}
          className="inline-block text-gray-900" // Set a solid color here
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
      <br />
      <motion.span
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        className="text-gray-900" // Use a solid color for visibility on white
      >
        {lastName}
      </motion.span>
    </motion.h1>
  );
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
    <div className="w-2 h-2 bg-indigo-500 rounded-full mx-1 animate-pulse"></div>
    <div className="w-2 h-2 bg-indigo-500 rounded-full mx-1 animate-pulse delay-100"></div>
    <div className="w-2 h-2 bg-indigo-500 rounded-full mx-1 animate-pulse delay-200"></div>
  </div>
);

const Home = () => {
  const { scrollYProgress } = useScroll();
  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <div className="bg-gray-100">
      <motion.section 
        id="hero" 
        className="min-h-[50vh] flex items-center justify-center bg-white relative overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        style={{ opacity: backgroundOpacity }}
      >
        {/* Animated background particles */}
        <motion.div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
              }}
              animate={{
                x: [
                  Math.random() * window.innerWidth,
                  Math.random() * window.innerWidth,
                ],
                y: [
                  Math.random() * window.innerHeight,
                  Math.random() * window.innerHeight,
                ],
              }}
              transition={{
                duration: Math.random() * 10 + 20,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
        </motion.div>

        <div className="container mx-auto px-4 text-center text-white relative z-10">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6"
        >
          <div className="w-24 h-24 rounded-full bg-black/10 backdrop-blur-md mx-auto mb-4 flex items-center justify-center text-4xl font-bold text-gray-500">
            UN
          </div>
        </motion.div>


          <AnimatedName />

          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.7 }}
            className="text-xl sm:text-2xl mb-8 text-black/90"
          >
            Backend Developer | Java Enthusiast | Problem Solver
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 2 }}
            className="space-x-4 mb-8"
          >
            <ScrollLink
              to="about"
              smooth={true}
              duration={500}
              className="bg-indigo-700 text-white px-8 py-4 rounded-full hover:bg-opacity-90 transition duration-300 inline-block cursor-pointer font-semibold"
            >
              Explore My Work
            </ScrollLink>
            <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
              className="bg-indigo-700 text-white px-8 py-4 rounded-full hover:bg-indigo-800 transition duration-300 inline-block cursor-pointer font-semibold border border-white/20"
            >
              Contact Me
            </ScrollLink>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 2.2 }}
            className="flex justify-center space-x-6"
          >
            {[
              { href: "https://github.com/UdayKalyanN", icon: FaGithub },
              { href: "https://www.linkedin.com/in/uday-kalyan-nuthalapati/", icon: FaLinkedin },
              { href: "mailto:udaykalyannuthalapati1999@gmail.com", icon: FaEnvelope }
            ].map(({ href, icon: Icon }) => (
              <motion.a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors duration-300"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Icon size={28} />
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <FaArrowDown className="text-white text-2xl" />
          </motion.div>
        </div>
      </motion.section>

      <Section id="quick-intro" bgColor="bg-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold mb-6 text-indigo-600">Welcome to My Portfolio</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              I'm a passionate Java Backend Developer with expertise in building robust, scalable applications. 
              With a strong foundation in computer science and hands-on industry experience, 
              I bring a unique blend of theoretical knowledge and practical skills to every project I undertake.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Frontend Development",
                description: "Creating responsive and intuitive user interfaces using React and modern CSS frameworks.",
                bgColor: "from-blue-500 to-blue-600",
                delay: 0.2
              },
              {
                title: "Backend Development",
                description: "Building robust server-side applications with Java, Spring Boot, and RESTful APIs.",
                bgColor: "from-purple-500 to-purple-600",
                delay: 0.4
              },
              {
                title: "Database Management",
                description: "Designing and optimizing database systems using SQL and NoSQL technologies.",
                bgColor: "from-indigo-500 to-indigo-600",
                delay: 0.6
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: item.delay, duration: 0.5 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className={`bg-gradient-to-br ${item.bgColor} p-6 text-white`}>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-white/90">{item.description}</p>
                </div>
              </motion.div>
            ))}
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

      {/* Footer Section */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold mb-4">Uday Kalyan</h3>
              <p className="text-gray-400">
                Backend Developer specializing in Java and Spring Boot applications.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {['About', 'Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
                  <li key={item}>
                    <ScrollLink
                      to={item.toLowerCase()}
                      smooth={true}
                      duration={500}
                      className="text-gray-400 hover:text-white cursor-pointer transition-colors"
                    >
                      {item}
                    </ScrollLink>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h3 className="text-xl font-bold mb-4">Connect</h3>
              <div className="flex space-x-4">
                {[
                  { icon: FaGithub, href: "https://github.com/UdayKalyanN", label: "GitHub" },
                  { icon: FaLinkedin, href: "https://www.linkedin.com/in/uday-kalyan-nuthalapati/", label: "LinkedIn" },
                  { icon: FaEnvelope, href: "mailto:udaykalyannuthalapati1999@gmail.com", label: "Email" }
                ].map(({ icon: Icon, href, label }) => (
                  <motion.a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={label}
                  >
                    <Icon size={24} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400"
          >
            <p>© {new Date().getFullYear()} Uday Kalyan Nuthalapati. All rights reserved.</p>
            <p className="mt-2 text-sm">
              Built with React, Tailwind CSS, and Framer Motion
            </p>
          </motion.div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
