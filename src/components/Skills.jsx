import { motion } from 'framer-motion';
import React from 'react';
import { FaCloud, FaCode, FaCogs, FaDatabase, FaUsers } from 'react-icons/fa';

const Skills = () => {
  const skillSections = [
    {
      icon: FaCode,
      title: "Languages & Web",
      skills: ["Java", "JavaScript", "SQL", "HTML/CSS", "Spring Boot", "Spring Cloud", "Hibernate", "Spring MVC"]
    },
    {
      icon: FaDatabase,
      title: "Database & Integration",
      skills: ["MySQL", "SQL Server", "PL/SQL", "Cassandra", "Spring Data JPA", "Redis", "DataStage", "Sterling Gateway", "EDI X12", "NON X12", "Facets", "Claims Processing", "HIPAA", "ETL"]
    },
    {
      icon: FaCloud,
      title: "DevOps & Cloud",
      skills: ["AWS", "Azure", "Docker", "Kubernetes", "Jenkins", "CI/CD", "Git", "Tidal", "Maven", "Log4j", "JUnit", "Mockito"]
    },
    {
      icon: FaCogs,
      title: "Architecture",
      skills: ["Microservices", "RESTful APIs", "System Design", "Web Services", "TDD", "Database Design"]
    },
    {
      icon: FaUsers,
      title: "Soft Skills",
      skills: ["Team Leadership", "Stakeholder Management", "Cross-Functional Collaboration", /*"Problem Solving", "Fast Learner",*/ "Communication", "Agile Methodology"]
    }
  ];

  return (
    <section id="skills" className="section bg-surface-dark">
      <div className="container">
        <motion.h2 
          className="text-3xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Skills
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillSections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="card p-6 bg-surface hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-3 mb-4">
                <section.icon className="text-2xl text-accent" />
                <h3 className="font-semibold">{section.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {section.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm hover:bg-accent/20 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;