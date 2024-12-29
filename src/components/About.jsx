// About.jsx
import { motion } from 'framer-motion';
import React from 'react';
import { FaAward, FaGraduationCap } from 'react-icons/fa';

const About = () => {
  const stats = [
    { value: "2+", label: "Years Experience" },
    { value: "5+", label: "Critical Applications" },
    // { value: "10M+", label: "Daily Transactions" },
    { value: "95%", label: "Test Coverage" }
  ];

  const education = [
    {
      title: "Master's in Computer Science",
      institute: "University of North Texas",
      period: "Expected May 2025",
      gpa: "3.8/4.0",
      courses: "Algorithms, Software Engineering, Distributed Database, Computer Architecture and Computer Networks"
    },
    {
      title: "Bachelor's in Computer Science and Engineering",
      institute: "Bapatla Engineering College",
      period: "June 2021",
      courses: "Data Structures, Operating Systems, Object Oriented Programming and Object Oriented Design and Analysis"
    }
  ];

  return (
    <section id="about" className="section bg-surface">
      <div className="container max-w-6xl mx-auto px-4">
        {/* Intro Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-6">About Me</h2>
          <p className="text-lg text-secondary max-w-3xl mx-auto">
          As a Software Engineer with over 2 years of experience, I've honed my skills in creating efficient and scalable solutions.
          Currently, I'm pursuing my M.S. in Computer Science at the University of North Texas, further expanding my knowledge and expertise.

          My core strengths lie in Java, SQL, Spring Boot, and AWS. I specialize in microservices architecture,
           with a keen focus on creating user-friendly applications that solve real-world problems.
          </p>
        </motion.div>

        {/* Stats Grid
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="card p-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="text-3xl font-bold text-accent mb-2">{stat.value}</div>
              <div className="text-secondary">{stat.label}</div>
            </motion.div>
          ))}
        </div> */}

        <div className="grid md:grid-cols-2 gap-8">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <FaGraduationCap className="text-2xl text-accent" />
              <h3 className="text-2xl font-semibold">Education</h3>
            </div>
            <div className="space-y-4">
              {education.map((edu, index) => (
                <div key={index} className="card p-6">
                  <h4 className="text-xl font-semibold mb-2">{edu.title}</h4>
                  <p className="text-accent mb-1">{edu.institute}</p>
                  <p className="text-secondary text-sm mb-2">{edu.period}</p>
                  {edu.gpa && (
                    <p className="text-secondary mb-2">GPA: {edu.gpa}</p>
                  )}
                  <p className="text-sm text-secondary">{edu.courses}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Current Role & Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Current Role
            <div>
              <div className="flex items-center gap-3 mb-6">
                <FaChalkboardTeacher className="text-2xl text-accent" />
                <h3 className="text-2xl font-semibold">Current Role</h3>
              </div>
              <div className="card p-6">
                <h4 className="text-xl font-semibold mb-2">Teaching Assistant</h4>
                <p className="text-accent mb-4">University of North Texas</p>
                <ul className="space-y-2 text-secondary">
                  <li>• Mentoring 200+ students in Algorithm Analysis</li>
                  <li>• Providing detailed technical feedback on assignments</li>
                  <li>• Contributing to course material development</li>
                </ul>
              </div>
            </div> */}

            {/* Certifications */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <FaAward className="text-2xl text-accent" />
                <h3 className="text-2xl font-semibold">Certifications</h3>
              </div>
              <div className="space-y-4">
                <div className="card p-6">
                  <h4 className="font-semibold mb-1">Microsoft Azure Fundamentals</h4>
                  <p className="text-secondary text-sm">October 2024 by Microsoft</p>
                </div>
                <div className="card p-6">
                  <h4 className="font-semibold mb-1">Java Backend Development</h4>
                  {/* <p className="text-accent text-sm">Top 5% among 10,000+ participants</p> */}
                  <p className="text-secondary text-sm">Geeks for Geeks</p>
                </div>
                <div className="card p-6">
                  <h4 className="font-semibold mb-1">Software Engineering Job Simulation</h4>
                  {/* <p className="text-accent text-sm">Top 5% among 10,000+ participants</p> */}
                  <p className="text-secondary text-sm">Hewlett Packard Enterprise</p>
                </div>
                <div className="card p-6">
                  <h4 className="font-semibold mb-1">Data Structures and Algorithms</h4>
                  {/* <p className="text-accent text-sm">Tackled 200+ coding challenges</p> */}
                  <p className="text-secondary text-sm">NextLeap</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;