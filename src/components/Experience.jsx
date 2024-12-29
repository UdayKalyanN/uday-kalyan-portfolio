// Experience.jsx
import { motion } from 'framer-motion';
import React from 'react';
import { FaCalendarAlt, FaMapMarkerAlt, FaTools, FaTrophy } from 'react-icons/fa';

const Experience = () => {
  const experiences = [
    {
      role: "EDI Developer / Programmer Analyst",
      company: "Cognizant Technology Solutions",
      period: "October 2021 - November 2023",
      location: "Hyderabad, India",
      achievements: [
        "Spearheaded top-tier EDI support, elevating system reliability by 30% to achieve 99.9% uptime across 5 critical applications",
        "Revamped SQL tables and procedures, accelerating query performance by 40% for a database handling 10M+ daily transactions",
        "Pioneered TDD and CI workflows, boosting development productivity by 25% and attaining 95% test coverage",
        "Orchestrated data validation for 837,834 Claims, enhancing data integrity by 35%"
      ],
      technologies: [
        "C#", "DataStage ETL", "SQL", "EDI Standards",
        "Healthcare Facets", "Sterling Gateway", "Claims Processing"
      ]
    },
    {
      role: "Teaching Assistant",
      company: "University of North Texas",
      period: "August 2024 - Present",
      location: "Denton, TX",
      achievements: [
        "Elevated course performance by 15% through effective teaching of complex algorithmic concepts",
        "Enhanced student learning outcomes by 20% through rigorous grading and feedback",
        "Directly contributed to a 30% grade improvement for struggling students"
      ],
      technologies: [
        "Algorithms", "Data Structures", "Problem Solving", "Technical Communication"
      ]
    }
  ];

  return (
    <section id="experience" className="section bg-surface-dark">
      <div className="container max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-6">Professional Experience</h2>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="card p-8 bg-surface"
            >
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold mb-2">{exp.role}</h3>
                  <p className="text-accent text-lg mb-2">{exp.company}</p>
                  <div className="flex flex-wrap gap-4 text-secondary">
                    <span className="flex items-center gap-2">
                      <FaCalendarAlt />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-2">
                      <FaMapMarkerAlt />
                      {exp.location}
                    </span>
                  </div>
                </div>
              </div>

              {/* Achievements */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-4">
                  <FaTrophy className="text-xl text-accent" />
                  <h4 className="text-lg font-semibold">Key Achievements</h4>
                </div>
                <ul className="space-y-3">
                  {exp.achievements.map((achievement, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + idx * 0.1 }}
                      className="flex items-start gap-2"
                    >
                      <span className="text-accent mt-1">•</span>
                      <span className="text-secondary">{achievement}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <FaTools className="text-xl text-accent" />
                  <h4 className="text-lg font-semibold">Technologies Used</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;