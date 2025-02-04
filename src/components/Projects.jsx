import { motion } from 'framer-motion';
import { Code, Globe } from 'lucide-react';

const ProjectCard = ({ title, description, delay }) => (
  <motion.div
    className="bg-opacity-10 bg-white backdrop-blur-lg rounded-xl p-6 shadow-xl border border-gray-700"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    whileHover={{ scale: 1.05 }}
  >
    <div className="flex items-center mb-4">
      {title.includes('Editor') ? (
        <Code className="w-6 h-6 text-blue-500 mr-3" />
      ) : (
        <Globe className="w-6 h-6 text-blue-500 mr-3" />
      )}
      <h3 className="text-2xl font-semibold gradient-text">{title}</h3>
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
      title: "Frontend Code Editor",
      description: [
        "Leveraged React.js to design and develop a feature-rich frontend code editor",
        "Provided users with a seamless platform for writing, editing, and testing code in real-time",
        "Implemented syntax highlighting, code completion, and live preview",
        "Added keyboard shortcuts, customizable themes, and collaborative editing"
      ]
    },
    {
      title: "AI Image Generation Website",
      description: [
        "Developed an AI image generation website using the MERN stack.",
        "Integrated OpenAI API for image generation functionality.",
        "Utilized Cloudinary for efficient image storage and management.",
        "Implemented responsive UI using React.js for seamless user experience.",
        "Enabled real-time image generation with backend APIs built in Node.js and Express.",
        "Ensured smooth deployment and scaling with Heroku and cloud services"
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