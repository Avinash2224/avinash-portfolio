import { motion } from 'framer-motion';
import { Bot, Heart, ShoppingCart } from 'lucide-react';

const ProjectCard = ({ title, description, techStack, icon: Icon, delay }) => (
  <motion.div
    className="bg-opacity-10 bg-white backdrop-blur-lg rounded-xl p-6 shadow-xl border border-gray-700"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    whileHover={{ scale: 1.05 }}
  >
    <div className="flex items-center mb-4">
      <Icon className="w-6 h-6 text-blue-500 mr-3" />
      <div>
        <h3 className="text-2xl font-semibold gradient-text">{title}</h3>
        <p className="text-sm text-blue-400 font-medium mt-1">{techStack}</p>
      </div>
    </div>
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

const Projects = () => {
  const projects = [
    {
      title: "AI-powered Educational Platform",
      techStack: "Python, FastAPI, React, LangChain, Docker, AWS",
      icon: Bot,
      description: [
        "Developed full-stack educational platform with React frontend and Python FastAPI backend, implementing REST APIs with comprehensive test automation using Jest and API testing frameworks",
        "Engineered AI-powered RAG chatbot using LangChain and integrated automated testing workflows for educational content processing, ensuring reliable query responses and practice question generation",
        "Containerized application with Docker and deployed on AWS EC2 with S3 integration, implementing role-based access control, JWT authentication, and automated deployment pipelines"
      ]
    },
    {
      title: "Healthcare Appointment & Analytics System",
      techStack: "React, Node.js, Django, Celery, Redis, GCP",
      icon: Heart,
      description: [
        "Built full-stack healthcare platform with React Native frontend and Django backend, implementing comprehensive API testing and automated workflows for appointment management and medical records",
        "Integrated real-time notifications using Celery, Redis, and WebSockets with automated testing for notification delivery systems, improving patient engagement by 25% through reliable communication channels",
        "Deployed on Google Cloud Platform with Docker containerization and Kubernetes orchestration, ensuring HIPAA-compliant data storage with automated testing for security compliance"
      ]
    },
    {
      title: "Scalable E-commerce Marketplace",
      techStack: "Node.js, React, Express.js, Kafka, Redis, AWS EKS",
      icon: ShoppingCart,
      description: [
        "Architected microservices-based e-commerce platform using Node.js and Express.js with React frontend, implementing comprehensive API testing suite using Jest and automated deployment workflows",
        "Developed real-time inventory tracking system with Kafka and Redis Streams, integrating automated testing for event-driven workflows and reducing overselling errors by 40% through reliable automation",
        "Deployed on AWS EKS with Kubernetes orchestration and Docker containerization, implementing CI/CD pipelines with GitHub Actions, automated testing, and monitoring for handling 10K+ concurrent users"
      ]
    }
  ];

  return (
    <section id="projects" className="min-h-screen flex flex-col items-center py-20 px-4">
      <motion.h2 
        className="text-4xl font-bold mb-12 gradient-text"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Projects
      </motion.h2>
      <div className="max-w-4xl space-y-8">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} {...project} delay={index * 0.3} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
