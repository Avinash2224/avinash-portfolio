import { motion } from 'framer-motion';

const Skills = () => (
  <section id="skills" className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-100 to-white px-4">
    <h2 className="text-4xl font-bold text-black mb-8">Skills</h2>
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      {/* Programming Languages */}
      <motion.div
        className="bg-white shadow-lg rounded-lg p-6 transform transition duration-1000 hover:scale-105"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <h3 className="text-2xl font-semibold mb-2 text-black">Programming Languages</h3>
        <p className="text-gray-700">Python, Java, C, C++, JavaScript, TypeScript</p>
      </motion.div>

      {/* Development Languages */}
      <motion.div
        className="bg-white shadow-lg rounded-lg p-6 transform transition duration-1000 hover:scale-105"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <h3 className="text-2xl font-semibold mb-2 text-black">Development Languages</h3>
        <p className="text-gray-700">HTML, CSS, Tailwind, JavaScript, ReactJS, Node.js, Express.js, PHP</p>
      </motion.div>

      {/* Technologies */}
      <motion.div
        className="bg-white shadow-lg rounded-lg p-6 transform transition duration-1000 hover:scale-105"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <h3 className="text-2xl font-semibold mb-2 text-black">Technologies</h3>
        <p className="text-gray-700">GitHub, Linux, Excel, Docker</p>
      </motion.div>

      {/* Databases */}
      <motion.div
        className="bg-white shadow-lg rounded-lg p-6 transform transition duration-1000 hover:scale-105"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        <h3 className="text-2xl font-semibold mb-2 text-black">Databases</h3>
        <p className="text-gray-700">MongoDB, MySQL, PostgreSQL</p>
      </motion.div>
    </motion.div>
  </section>
);

export default Skills;
