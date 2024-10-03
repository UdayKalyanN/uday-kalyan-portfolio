import { motion } from 'framer-motion';
import React from 'react';

const skillCategories = [
  {
    title: 'Languages & Web',
    skills: ['Java', 'JavaScript', 'Python', 'C#', 'SQL', 'HTML', 'CSS']
  },
  {
    title: 'Frameworks',
    skills: ['Spring (Boot, MVC, Cloud)', 'Hibernate', 'ReactJS', 'Tailwind CSS']
  },
  {
    title: 'Databases',
    skills: ['Oracle', 'MySQL', 'SQL Server', 'PL/SQL', 'JDBC', 'Spring Data JPA']
  },
  {
    title: 'DevOps & Cloud',
    skills: ['Maven', 'Log4j', 'JUnit', 'Kafka', 'Git', 'Docker', 'Kubernetes', 'Jenkins', 'GitHub Actions', 'AWS']
  },
  {
    title: 'Other',
    skills: ['Microservices', 'RESTful APIs', 'CI/CD', 'Data Structures', 'Unix Shell Scripting']
  },
  {
    title: 'Soft Skills',
    skills: ['Stakeholder Management', 'Communication', 'Team Leadership']
  }
];

const SkillCard = ({ title, skills, index }) => (
  <motion.div 
    className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1, duration: 0.5 }}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <h3 className="text-xl font-semibold mb-4 text-primary">{title}</h3>
    <div className="flex flex-wrap -m-1">
      {skills.map((skill, skillIndex) => (
        <motion.span 
          key={skillIndex}
          className="m-1 px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: (index * 0.1) + (skillIndex * 0.05), duration: 0.3 }}
        >
          {skill}
        </motion.span>
      ))}
    </div>
  </motion.div>
);

const Skills = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold mb-12 text-center text-primary"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Skills
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCard key={index} title={category.title} skills={category.skills} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;