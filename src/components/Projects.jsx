import { motion } from 'framer-motion';

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen flex flex-col items-center bg-gradient-to-b from-blue-100 to-white py-16 px-4">
      <h2 className="text-4xl font-bold text-black mb-8">Projects</h2>

      <div className="max-w-4xl space-y-10">
        
        {/* Frontend Code Editor Project */}
        <motion.div
          className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-semibold text-black">Frontend Code Editor</h3>
          <ul className="mt-2 text-gray-700 list-disc list-inside space-y-2">
            <li>Leveraged React.js to design and develop a feature-rich frontend code editor.</li>
            <li>Provided users with a seamless platform for writing, editing, and testing code in real-time.</li>
            <li>Implemented functionalities such as syntax highlighting, code completion, and live preview to enhance the coding experience.</li>
            <li>Prioritized user experience by focusing on intuitive interface design and responsive layout.</li>
            <li>Incorporated advanced features like keyboard shortcuts, customizable themes, and collaborative editing capabilities.</li>
            <li>Resulted in a highly functional and user-friendly coding environment.</li>
          </ul>
        </motion.div>

        {/* Web Scraper Project */}
        <motion.div
          className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h3 className="text-2xl font-semibold text-black">Web Scraper</h3>
          <ul className="mt-2 text-gray-700 list-disc list-inside space-y-2">
            <li>Developed a web scraper to extract and aggregate data from target websites.</li>
            <li>Utilized libraries such as Beautiful Soup for parsing HTML and Requests for making HTTP requests.</li>
            <li>Employed Pandas for data manipulation and storage.</li>
            <li>Implemented features like data cleaning and periodic scraping using scheduling libraries.</li>
            <li>Enabled CSV export for easy data access.</li>
            <li>Enhanced efficiency by handling pagination and dynamic content loading.</li>
          </ul>
        </motion.div>

      </div>
    </section>
  );
};

export default Projects;
