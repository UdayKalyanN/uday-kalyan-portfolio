// Projects.jsx
import { motion } from 'framer-motion';
import React from 'react';
import { FaGithub } from 'react-icons/fa';

const projects = [
  {
    title: "E-Wallet Microservices Platform",
    description: "High-performance digital wallet system supporting 10k+ concurrent users",
    tech: ["Java", "Spring Boot", "JPA", "MySQL", "JUnit", "REST APIs","OAuth2"],
    highlights: [
      "Implemented event-driven architecture with Kafka",
      "Achieved 99.99% uptime with distributed caching",
      "Integrated ELK stack for monitoring",
      "Implemented OAuth2 security"
    ],
    github: "https://github.com/UdayKalyanN/e-wallet-backend"
  },
  {
    title: "Digital Library Management System",
    description: "Scalable library system with advanced search and recommendations",
    tech: ["Java", "Spring Boot", "JPA", "MySQL", "JUnit", "REST APIs"],
    highlights: [
      "Improved book discovery by 70%",
      "Implemented caching for 50% faster searches",
      "Added automated testing with 90% coverage",
      "Built recommendation engine"
    ],
    github: "https://github.com/UdayKalyanN/JavaBackend"
  },
  {
    title: "JobHub Platform",
    description: "Full-stack job search system with ML-powered matching",
    tech: ["React", "FastAPI","OAuth2"],
    highlights: [
      "Increased job match accuracy by 60%",
      "Implemented real-time notifications",
      "Built responsive UI with React",
      "Added OAuth2 authentication"
    ],
    github: "https://github.com/UdayKalyanN/JobHub"
  }
];

const ProjectCard = ({ project }) => (
  <motion.div
    className="card h-full flex flex-col"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
  >
    <div className="p-6 flex-grow">
      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
      <p className="text-secondary mb-4">{project.description}</p>
      
      <div className="mb-4">
        <h4 className="font-medium mb-2">Key Features:</h4>
        <ul className="space-y-1">
          {project.highlights.map((highlight, index) => (
            <li key={index} className="text-secondary flex items-start">
              <span className="text-accent mr-2">•</span>
              {highlight}
            </li>
          ))}
        </ul>
      </div>
      
      <div className="flex flex-wrap gap-2">
        {project.tech.map((tech, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-surface-dark text-secondary rounded-full text-sm"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
    
    <div className="p-6 border-t border-primary/10">
      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center text-accent hover:text-accent/80 transition-colors"
      >
        <FaGithub className="mr-2" />
        View on GitHub
      </a>
    </div>
  </motion.div>
);

const Projects = () => {
  return (
    <section id="projects" className="section bg-surface">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-6">Featured Projects</h2>
          <p className="text-secondary max-w-2xl mx-auto">
            Showcase of my technical projects focusing on scalable backend systems
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;