import { motion } from 'framer-motion';
import React from 'react';
import { FaBriefcase, FaCalendarAlt, FaChalkboardTeacher, FaLightbulb, FaMapMarkerAlt, FaTasks, FaTools, FaTrophy } from 'react-icons/fa';

const experienceData = [
  {
    title: "Teaching Assistant",
    company: "University of North Texas",
    duration: "January 2024 - Present",
    location: "Denton, TX",
    description: "Teaching Assistant for the Analysis of Computer Algorithms course.",
    highlights: [
      "Assist in teaching and explaining complex algorithmic concepts to graduate students",
      "Grade assignments and provide constructive feedback to help students improve their understanding",
      "Conduct office hours to provide additional support and clarification on course materials",
      "Collaborate with the professor to develop and refine course content and materials"
    ],
    skills: [
      "Algorithm Analysis",
      "Data Structures",
      "Teaching",
      "Problem-Solving",
      "Communication"
    ]
  },
  {
    title: "EDI Developer / Programmer Analyst",
    company: "Cognizant Technology Solutions India Private Ltd.",
    duration: "October 2021 - November 2023",
    location: "Chennai, India",
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
    className="mb-12 overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition duration-300 bg-[#444444] font-[Verdana]"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1, duration: 0.5 }}
    whileHover={{ y: -5 }}
  >
    <div className="p-6 text-[#f5f5dc] border-b border-[#f5f5dc]/10">
      <div className="flex items-center mb-4">
        {experience.company === "University of North Texas" ? (
          <FaChalkboardTeacher className="w-16 h-16 mr-4 text-[#f5f5dc]" />
        ) : (
          <div className="w-16 h-16 mr-4 bg-[#f5f5dc] rounded-full flex items-center justify-center">
            <FaBriefcase className="w-8 h-8 text-[#444444]" />
          </div>
        )}
        <div>
          <h3 className="text-2xl font-bold flex items-center">
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

    <div className="p-6 text-[#f5f5dc]">
      <p className="mb-6 italic opacity-90">{experience.description}</p>
      
      {experience.importantPoints && (
        <>
          <h5 className="font-semibold text-lg mb-3 text-[#f5f5dc] flex items-center">
            <FaTrophy className="mr-2 text-yellow-300" />
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
                <FaLightbulb className="w-5 h-5 text-yellow-300 mr-2 mt-1 flex-shrink-0" />
                <span className="font-medium opacity-90">{point}</span>
              </motion.li>
            ))}
          </ul>
        </>
      )}

      <h5 className="font-semibold text-lg mb-3 text-[#f5f5dc] flex items-center">
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
            <svg className="w-5 h-5 text-[#f5f5dc] mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span className="opacity-90">{highlight}</span>
          </motion.li>
        ))}
      </ul>
      
      <h5 className="font-semibold text-lg mb-3 text-[#f5f5dc] flex items-center">
        <FaTools className="mr-2" />
        Skills & Technologies:
      </h5>
      <div className="flex flex-wrap mb-6">
        {experience.skills.map((skill, index) => (
          <motion.span 
            key={index} 
            className="bg-[#f5f5dc] text-[#444444] px-3 py-1 rounded-full text-sm mr-2 mb-2 flex items-center"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 + index * 0.05 }}
            whileHover={{ scale: 1.05 }}
          >
            <span className="w-2 h-2 bg-[#444444] rounded-full mr-2"></span>
            {skill}
          </motion.span>
        ))}
      </div>
    </div>
  </motion.div>
);

const Experience = () => {
  return (
    <div className="min-h-screen bg-[#f5f5dc] py-16 font-[Verdana]">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold mb-12 text-center text-[#444444] flex items-center justify-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <FaBriefcase className="mr-4" />
          Work Experience
        </motion.h2>

        {/* Timeline Line */}
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-[#444444]/20"></div>
          
          {experienceData.map((exp, index) => (
            <ExperienceItem key={index} experience={exp} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;