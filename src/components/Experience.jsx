import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt, FaTrophy, FaTasks, FaTools } from 'react-icons/fa';

const experienceData = [
  {
    title: "EDI Developer / Programmer Analyst",
    company: "Cognizant Technology Solutions India Private Ltd.",
    duration: "October 2021 - November 2023",
    location: "Chennai, India",
    logo: "/cognizant-logo.jpeg",
    description: "Specialized in developing and maintaining EDI systems, focusing on data integration, system monitoring, and process optimization. Extensively utilized IBM InfoSphere DataStage for ETL processes, designing and implementing complex data integration workflows.",
    importantPoints: [
      "Reduced processing time for daily loads by 35% through SQL and DataStage job optimization",
      "Implemented automated testing, increasing code coverage to 95% and improving data quality",
      "Developed a new EDI validation system using DataStage, reducing errors by 40%",
      "Designed and optimized parallel jobs in DataStage for high-volume data processing, improving throughput by 50%"
    ],
    highlights: [
      "Provided Level 1 & 2 EDI support with 99% SLA compliance",
      "Optimized SQL queries and DataStage procedures, improving processing efficiency by 40%",
      "Implemented TDD and CI workflows in the ETL process, boosting development productivity by 25%",
      "Managed daily data loads and validations for claims, providers, and members using DataStage",
      "Created custom DataStage stages for specialized data transformations, enhancing data integration capabilities",
      "Utilized DataStage's debugging and monitoring tools for performance optimization of ETL workflows"
    ],
    skills: [
      "EDI Standards (X12, NON X12)",
      "IBM InfoSphere DataStage",
      "ETL Processes",
      "Linux Scripting",
      "SQL Server",
      "C#",
      "ASP.NET",
      "Tidal",
      "Sterling File Gateway (SFG)"
    ]
  }
];

const ExperienceItem = ({ experience, index }) => (
  <motion.div 
    className="mb-12 overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition duration-300 bg-white"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1, duration: 0.5 }}
  >
    <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white">
      <div className="flex items-center mb-4">
        <img src={experience.logo} alt={`${experience.company} logo`} className="w-16 h-16 mr-4 object-contain bg-white rounded-full p-2" />
        <div>
          <h3 className="text-2xl font-bold flex items-center">
            <FaBriefcase className="mr-2" />
            {experience.title}
          </h3>
          <h4 className="text-xl opacity-90">{experience.company}</h4>
          <p className="text-sm opacity-80 flex items-center mt-1">
            <FaCalendarAlt className="mr-2" />
            {experience.duration}
            <FaMapMarkerAlt className="ml-4 mr-2" />
            {experience.location}
          </p>
        </div>
      </div>
    </div>
    <div className="p-6">
      <p className="text-gray-700 mb-6 italic">{experience.description}</p>
      
      <h5 className="font-semibold text-lg mb-3 text-red-600 flex items-center">
        <FaTrophy className="mr-2" />
        Key Achievements:
      </h5>
      <ul className="space-y-2 mb-6">
        {experience.importantPoints.map((point, index) => (
          <motion.li 
            key={index} 
            className="flex items-start"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 + index * 0.1 }}
          >
            <svg className="w-5 h-5 text-red-500 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
            </svg>
            <span className="text-gray-800 font-medium">{point}</span>
          </motion.li>
        ))}
      </ul>

      <h5 className="font-semibold text-lg mb-3 text-blue-600 flex items-center">
        <FaTasks className="mr-2" />
        Responsibilities & Technical Contributions:
      </h5>
      <ul className="space-y-2 mb-6">
        {experience.highlights.map((highlight, index) => (
          <motion.li 
            key={index} 
            className="flex items-start"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 + index * 0.1 }}
          >
            <svg className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span className="text-gray-700">{highlight}</span>
          </motion.li>
        ))}
      </ul>
      
      <h5 className="font-semibold text-lg mb-3 text-blue-600 flex items-center">
        <FaTools className="mr-2" />
        Skills & Technologies:
      </h5>
      <div className="flex flex-wrap mb-6">
        {experience.skills.map((skill, index) => (
          <motion.span 
            key={index} 
            className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm mr-2 mb-2 flex items-center"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 + index * 0.05 }}
          >
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
            {skill}
          </motion.span>
        ))}
      </div>
    </div>
  </motion.div>
);

const Experience = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-16">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <FaBriefcase className="mr-4" />
          Work Experience
        </motion.h2>
        {experienceData.map((exp, index) => (
          <ExperienceItem key={index} experience={exp} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Experience;