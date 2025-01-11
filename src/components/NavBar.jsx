import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const sections = ['home', 'skills', 'experience', 'projects', 'contact'];
    const options = { threshold: 0.3 };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
          history.replaceState(null, null, `#${entry.target.id}`);
        }
      });
    }, options);

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) observer.observe(element);
    });

    return () => {
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  const navItems = ['home', 'skills', 'experience', 'projects', 'contact'];

  return (
    <motion.header
      className="fixed w-full z-50 top-0"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="container mx-auto px-4">
        <div className="glass-effect rounded-b-xl">
          {/* Desktop Menu */}
          <div className="hidden md:flex justify-center space-x-8 py-4">
            {navItems.map((item) => (
              <motion.a
                key={item}
                href={`#${item}`}
                className={`text-lg hover:text-blue-400 transition-colors ${
                  activeSection === item ? 'gradient-text font-bold' : 'text-gray-300'
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex justify-end py-4 px-4">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-blue-500 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          className={`md:hidden glass-effect mt-2 rounded-xl ${isMenuOpen ? 'block' : 'hidden'}`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: isMenuOpen ? 1 : 0, y: isMenuOpen ? 0 : -20 }}
          transition={{ duration: 0.2 }}
        >
          <div className="flex flex-col space-y-4 p-4">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item}`}
                onClick={() => setIsMenuOpen(false)}
                className={`text-lg hover:text-blue-400 transition-colors ${
                  activeSection === item ? 'gradient-text font-bold' : 'text-gray-300'
                }`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            ))}
          </div>
        </motion.div>
      </nav>
    </motion.header>
  );
};

export default Navbar;