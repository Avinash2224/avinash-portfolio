import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

const ExperienceCard = ({ company, position, date, description, techStack, delay }) => (
  <motion.div
    className="bg-opacity-10 bg-white backdrop-blur-lg rounded-xl p-6 shadow-xl border border-gray-700"
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay }}
    whileHover={{ scale: 1.02 }}
  >
    <div className="flex items-center mb-4">
      <Briefcase className="w-6 h-6 text-blue-500 mr-3" />
      <h3 className="text-2xl font-semibold gradient-text">{company}</h3>
    </div>
    <div className="flex items-center text-gray-400 mb-2">
      <Calendar className="w-4 h-4 mr-2" />
      <span>{date}</span>
    </div>
    <p className="text-lg text-gray-300 italic mb-2">{position}</p>
    {techStack && (
      <p className="text-sm text-blue-400 font-medium mb-4">TechStack: {techStack}</p>
    )}
    <ul className="space-y-2">
      {description.map((item, index) => (
        <motion.li
          key={index}
          className="text-gray-300"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: delay + 0.1 * index }}
        >
          • {item}
        </motion.li>
      ))}
    </ul>
  </motion.div>
);

const Experience = () => {
  const experiences = [
    {
      company: "Realevo Datatek",
      position: "Full Stack Developer",
      date: "Apr '24 - Jun '24",
      techStack: "React, Node.js, GraphQL, PostgreSQL, Docker, Kubernetes",
      description: [
        "Developed scalable full-stack applications using React frontend with Redux state management and Node.js backend, implementing GraphQL APIs for efficient data fetching and real-time updates",
        "Built comprehensive API testing suite and automated deployment pipelines, reducing manual testing efforts by 60% and ensuring 99.5% uptime for production services",
        "Deployed microservices architecture on Kubernetes clusters with Docker containerization, implementing monitoring solutions and auto-scaling for handling 10K+ concurrent users"
      ]
    },
    {
      company: "Katyayani Organics",
      position: "Backend Engineer",
      date: "Sep '24 - Oct '24",
      techStack: "Python, Flask, Docker, PostgreSQL, REST APIs, Payment Integration",
      description: [
        "Engineered robust backend services using Python and Flask, designing RESTful APIs to handle 2K+ daily transactions with sub-200ms response times and automated test coverage",
        "Implemented secure payment processing workflows with comprehensive API testing and validation, reducing transaction failures by 30% through automated error handling and retry mechanisms",
        "Containerized applications with Docker and established CI/CD pipelines using GitHub Actions, improving deployment efficiency by 60% and enabling seamless rollbacks"
      ]
    }
  ];

  return (
    <section id="experience" className="min-h-screen flex flex-col items-center py-20 px-4">
      <motion.h2 
        className="text-4xl font-bold mb-12 gradient-text"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Experience
      </motion.h2>
      <div className="max-w-4xl space-y-8">
        {experiences.map((exp, index) => (
          <ExperienceCard key={exp.company} {...exp} delay={index * 0.3} />
        ))}
      </div>
    </section>
  );
};

export default Experience;
