import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { Monitor } from 'lucide-react';

const Home = () => {
  {/* Update button styles */}
const primaryButtonClasses = "px-6 py-3 bg-gradient-to-r from-emerald-500 to-emerald-700 rounded-full text-white font-semibold hover:shadow-lg transition-all duration-300";
const secondaryButtonClasses = "px-6 py-3 border-2 border-emerald-500 rounded-full text-emerald-500 font-semibold hover:bg-emerald-500 hover:text-white transition-all duration-300";
  return (
    <motion.section
      id="home"
      className="min-h-screen flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="flex flex-col md:flex-row items-center justify-around max-w-7xl w-full mx-auto px-4">
        {/* Profile Image */}
        <motion.div 
          className="flex justify-start mb-8 md:mb-0"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 animate-pulse"></div>
            <img
              src="/assets/avi.png"
              alt="Profile"
              className="relative z-10 object-cover w-full h-full rounded-full border-4 border-white glass-effect"
            />
          </div>
        </motion.div>

        {/* Text Content */}
        <motion.div 
          className="text-center md:text-left md:max-w-xl p-6 glass-effect rounded-xl"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
            <TypeAnimation
              sequence={[
                'Hey! This is Avinash Alok',
                1000,
                'I am a full stack developer.',
                1000,
                'I am a DSA enthusiast.',
                1000,
                "I am a Cloud Advocate."
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            I am a full-stack developer with a strong foundation in modern web technologies. 
            I completed my graduation from the Indian Institute of Information Technology, Kottayam, 
            where I gained a deep understanding of both frontend and backend development.
          </p>
          <div className="mt-6 flex justify-center md:justify-start space-x-4">
            <motion.a
              href="#contact"
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-white font-semibold hover:shadow-lg transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.a>
            <motion.a
              href="#projects"
              className="px-6 py-3 border-2 border-blue-500 rounded-full text-blue-500 font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Projects
            </motion.a>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Home;