import { motion } from 'framer-motion';
import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold mb-12 text-center text-primary"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div 
            className="bg-white p-8 rounded-lg shadow-lg"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-primary">My Journey</h3>
            <p className="text-lg mb-4">
              As a Programmer Analyst with over 2 years of experience in SQL development, 
              I've honed my skills in creating efficient and scalable solutions. Currently, 
              I'm pursuing my M.S. in Computer Science at the University of North Texas, 
              further expanding my knowledge and expertise.
            </p>
            <p className="text-lg">
              My passion for technology and problem-solving drives me to continuously learn 
              and adapt in this ever-evolving field. I thrive on challenges and am always 
              eager to take on new projects that push the boundaries of what's possible.
            </p>
          </motion.div>
          <motion.div 
            className="bg-white p-8 rounded-lg shadow-lg"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-primary">My Expertise</h3>
            <p className="text-lg mb-4">
              My core strengths lie in Java, SQL, Spring Boot, and AWS. I specialize 
              in microservices architecture, with a keen focus on 
              creating user-friendly applications that solve real-world problems.
            </p>
            <p className="text-lg">
              With a strong foundation in computer science and hands-on industry experience, 
              I bring a unique blend of theoretical knowledge and practical skills to every 
              project I undertake.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;