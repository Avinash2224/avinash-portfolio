import { motion } from 'framer-motion';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Home from './components/Home';
import Navbar from './components/NavBar';
import ParticlesBackground from './components/ParticlesBackground';
import Projects from './components/Projects';
import Skills from './components/Skills';

const App = () => {
  return (
    <div className="relative">
      <div className="fixed inset-0 z-0">
        <ParticlesBackground />
      </div>
      <Navbar />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10"
      >
        <Home />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </motion.main>
    </div>
  );
};

export default App;