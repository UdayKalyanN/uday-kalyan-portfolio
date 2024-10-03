import { motion } from 'framer-motion';
import React from 'react';
import { FaCalendarAlt, FaCode, FaExternalLinkAlt, FaToolbox } from 'react-icons/fa';

const projectsData = [
  {
    title: "JobHub Platform",
    year: "2024",
    description: "Developed a full-stack job search system, boosting user engagement by 40% and job match accuracy by 60%. Implemented OAuth2, cutting unauthorized access by 95%.",
    tech: ["ReactJS", "FastAPI", "Tailwind CSS"],
    link: "https://github.com/UdayKalyanN/JobHub"
  },
  {
    title: "E-Wallet Application",
    year: "2024",
    description: "Architected a microservices platform supporting 10,000+ concurrent users with 99.99% uptime. Integrated ELK stack, slashing error resolution time by 60%.",
    tech: ["Java", "Spring", "Kafka", "Redis", "OAuth2", "Hibernate", "MySQL", "JUnit", "Mockito","JPA", "RESTful APIs", "ELK stack"],
    link: "https://github.com/UdayKalyanN/e-wallet-backend"
  },
  {
    title: "Text Summarization Using T5 Model",
    year: "2020-2021",
    description: "Crafted an NLP tool processing documents 3x faster with 85% summary accuracy.",
    tech: ["Python", "PyTorch", "BERT", "scikit-learn", "NLTK"],
    link: "https://github.com/UdayKalyanN/Text-Summarization"
  },
  {
    title: "Digital Library Management System",
    year: "2024",
    description: "Created a library application enhancing book discovery by 70% and user engagement by 55%.",
    tech: ["Java", "Spring Boot", "Hibernate", "MySQL", "JUnit", "Mockito","JPA", "RESTful APIs","Kafka", "Redis", "OAuth2", "Hibernate"],
    link: "https://github.com/UdayKalyanN/JavaBackend/"
  }
];

const ProjectCard = ({ project, index }) => (
  <motion.div 
    className="bg-white rounded-lg shadow-lg overflow-hidden"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1, duration: 0.5 }}
    whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
  >
    <div className="p-6">
      <motion.h3 
        className="text-2xl font-bold text-blue-600 mb-2 flex items-center"
        initial={{ x: -20 }}
        animate={{ x: 0 }}
        transition={{ delay: (index * 0.1) + 0.2 }}
      >
        <FaCode className="mr-2" />
        {project.title}
      </motion.h3>
      <motion.p 
        className="text-gray-600 mb-4 flex items-center"
        initial={{ x: -20 }}
        animate={{ x: 0 }}
        transition={{ delay: (index * 0.1) + 0.3 }}
      >
        <FaCalendarAlt className="mr-2" />
        {project.year}
      </motion.p>
      <motion.p 
        className="mb-4 text-gray-700"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: (index * 0.1) + 0.4 }}
      >
        {project.description}
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: (index * 0.1) + 0.5 }}
      >
        <p className="text-sm font-semibold text-gray-600 mb-2 flex items-center">
          <FaToolbox className="mr-2" />
          Tech Stack:
        </p>
        <div className="flex flex-wrap">
          {project.tech.map((tech, techIndex) => (
            <span key={techIndex} className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 mb-2 px-2.5 py-0.5 rounded-full">
              {tech}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
    <motion.div
      className="bg-gray-100 p-4 flex justify-end"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: (index * 0.1) + 0.6 }}
    >
      <a 
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:text-blue-800 transition duration-300 flex items-center"
      >
        View Project <FaExternalLinkAlt className="ml-2" />
      </a>
    </motion.div>
  </motion.div>
);

const Projects = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-16">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;