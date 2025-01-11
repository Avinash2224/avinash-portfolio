import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

const ExperienceCard = ({ company, position, date, description, delay }) => (
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
    <div className="flex items-center text-gray-400 mb-4">
      <Calendar className="w-4 h-4 mr-2" />
      <span>{date}</span>
    </div>
    <p className="text-lg text-gray-300 italic mb-4">{position}</p>
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
      company: "Apponward Technologies",
      position: "Remote Backend Engineer",
      date: "Oct '23 - Dec '23",
      description: [
        "Demonstrated expertise in leveraging Django REST Framework to design, develop, and maintain robust APIs.",
        "Implemented authentication, serialization, and viewsets to create scalable and efficient web APIs.",
        "Experienced in developing RESTful APIs using Python, focusing on high-quality, well-documented endpoints."
      ]
    },
    {
      company: "Katyayani Organics",
      position: "Remote Backend Engineer",
      date: "Sep '24 - Oct '24",
      description: [
        "Leveraged Flask and FastAPI to design, develop, and maintain scalable web applications and APIs.",
        "Designed and optimized PostgreSQL databases to ensure data integrity and efficient query performance.",
        "Implemented containerization with Docker for consistent environments across development, testing, and production."
      ]
    },
    {
      company: "Realevo Datatek",
      position: "Remote Python Developer",
      date: "Nov’24 - Jan’25",
      description: [
        "Developed and implemented web scraping solutions using Beautiful Soup to extract data from multiple websites.Collected, cleaned, and structured data to ensure accuracy and consistency.",
        "Delivered the processed data in CSV format, enabling seamless integration with machine learning models for further analysis and predictive modeling.",
        "Demonstrated proficiency in handling large datasets, optimizing data retrieval processes, and adhering to best practices for efficient web scraping.",
        "Collaborated with cross-functional teams to align data extraction and pro-cessing with project requirements, showcasing strong problem-solving and analytical skills in a fast-paced environment"
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