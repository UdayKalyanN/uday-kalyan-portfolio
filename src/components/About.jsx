import { motion } from 'framer-motion';
import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-[#f5f5dc] py-16 font-[Verdana]">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold mb-12 text-center text-[#444444]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div 
            className="bg-[#444444] p-8 rounded-lg shadow-xl"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-[#f5f5dc]">My Journey</h3>
            <p className="text-lg mb-4 text-[#f5f5dc]/90">
              As a Programmer Analyst with over 2 years of experience in SQL development, 
              I've honed my skills in creating efficient and scalable solutions. Currently, 
              I'm pursuing my M.S. in Computer Science at the University of North Texas, 
              further expanding my knowledge and expertise.
            </p>
            <p className="text-lg text-[#f5f5dc]/90">
              My passion for technology and problem-solving drives me to continuously learn 
              and adapt in this ever-evolving field. I thrive on challenges and am always 
              eager to take on new projects that push the boundaries of what's possible.
            </p>
          </motion.div>
          <motion.div 
            className="bg-[#444444] p-8 rounded-lg shadow-xl"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-[#f5f5dc]">My Expertise</h3>
            <p className="text-lg mb-4 text-[#f5f5dc]/90">
              My core strengths lie in Java, SQL, Spring Boot, and AWS. I specialize 
              in microservices architecture, with a keen focus on 
              creating user-friendly applications that solve real-world problems.
            </p>
            <p className="text-lg text-[#f5f5dc]/90">
              With a strong foundation in computer science and hands-on industry experience, 
              I bring a unique blend of theoretical knowledge and practical skills to every 
              project I undertake.
            </p>
            
            {/* Added Feature Highlights */}
            <motion.div 
              className="mt-8 grid grid-cols-2 gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              {[
                { label: 'Years Experience', value: '2+' },
                { label: 'Projects Completed', value: '15+' },
                { label: 'Technologies', value: '10+' },
                { label: 'Happy Clients', value: '20+' }
              ].map((stat, index) => (
                <div 
                  key={index}
                  className="bg-[#f5f5dc]/10 p-4 rounded-lg text-center hover:bg-[#f5f5dc]/20 transition-all duration-300"
                >
                  <p className="text-2xl font-bold text-[#f5f5dc]">{stat.value}</p>
                  <p className="text-sm text-[#f5f5dc]/80">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Additional Section: Why Choose Me */}
        <motion.div 
          className="mt-12 bg-[#444444] p-8 rounded-lg shadow-xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <h3 className="text-2xl font-semibold mb-6 text-[#f5f5dc] text-center">Why Choose Me?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Problem Solver',
                description: 'Analytical thinker with a proven track record of solving complex technical challenges.'
              },
              {
                title: 'Quick Learner',
                description: 'Adaptable professional who stays current with emerging technologies and best practices.'
              },
              {
                title: 'Team Player',
                description: 'Effective communicator who thrives in collaborative, fast-paced environments.'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-[#f5f5dc]/10 p-6 rounded-lg hover:bg-[#f5f5dc]/20 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
              >
                <h4 className="text-xl font-semibold mb-2 text-[#f5f5dc]">{item.title}</h4>
                <p className="text-[#f5f5dc]/90">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;