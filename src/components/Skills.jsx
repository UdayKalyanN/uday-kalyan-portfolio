import { motion } from 'framer-motion';
import React from 'react';
import { FaBrain, FaCloud, FaCode, FaDatabase, FaTools, FaUsers } from 'react-icons/fa';

const skillCategories = [
  {
    title: 'Languages & Web',
    icon: FaCode,
    skills: ['Java', 'JavaScript', 'Python', 'C#', 'SQL', 'HTML', 'CSS']
  },
  {
    title: 'Frameworks',
    icon: FaTools,
    skills: ['Spring (Boot, MVC, Cloud)', 'Hibernate', 'ReactJS', 'Tailwind CSS']
  },
  {
    title: 'Databases',
    icon: FaDatabase,
    skills: ['Oracle', 'MySQL', 'SQL Server', 'PL/SQL', 'JDBC', 'Spring Data JPA']
  },
  {
    title: 'DevOps & Cloud',
    icon: FaCloud,
    skills: ['Maven', 'Log4j', 'JUnit', 'Kafka', 'Git', 'Docker', 'Kubernetes', 'Jenkins', 'GitHub Actions', 'AWS']
  },
  {
    title: 'Other Technologies',
    icon: FaBrain,
    skills: ['Microservices', 'RESTful APIs', 'CI/CD', 'Data Structures', 'Unix Shell Scripting']
  },
  {
    title: 'Soft Skills',
    icon: FaUsers,
    skills: ['Stakeholder Management', 'Communication', 'Team Leadership']
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
};

const SkillCard = ({ title, icon: Icon, skills, index }) => (
  <motion.div 
    variants={itemVariants}
    className="bg-white rounded-xl shadow-lg p-6 transform hover:scale-105 transition-all duration-300"
    whileHover={{ y: -5 }}
  >
    <div className="flex items-center mb-4 space-x-3">
      <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
        <Icon className="text-white text-2xl" />
      </div>
      <h3 className="text-xl font-bold bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
        {title}
      </h3>
    </div>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill, skillIndex) => (
        <motion.span
          key={skillIndex}
          className="px-3 py-1 bg-gradient-to-r from-indigo-50 to-purple-50 text-indigo-600 rounded-full text-sm font-medium"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.1 + skillIndex * 0.05 }}
          whileHover={{
            scale: 1.05,
            backgroundColor: '#EEF2FF'
          }}
        >
          {skill}
        </motion.span>
      ))}
    </div>
  </motion.div>
);

const Skills = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            My Skills
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and professional capabilities.
            Each skill has been developed through hands-on experience and continuous learning.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {skillCategories.map((category, index) => (
            <SkillCard 
              key={index} 
              {...category} 
              index={index} 
            />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600 mb-4">
            Continuously learning and expanding my skill set
          </p>
          <div className="flex justify-center space-x-2">
            {[1, 2, 3].map((dot) => (
              <motion.div
                key={dot}
                className="w-2 h-2 bg-indigo-600 rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [1, 0.5, 1]
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: dot * 0.2
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;