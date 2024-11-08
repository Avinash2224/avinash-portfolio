import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const navigate = useNavigate();

  useEffect(() => {
    const sections = ['home', 'skills', 'experience', 'projects', 'contact'];
    const options = { threshold: 0.3 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
          navigate(`#${entry.target.id}`, { replace: true });
        }
      });
    }, options);

    sections.forEach((section) => {
      const sectionElement = document.getElementById(section);
      if (sectionElement) observer.observe(sectionElement);
    });

    return () => {
      sections.forEach((section) => {
        const sectionElement = document.getElementById(section);
        if (sectionElement) observer.unobserve(sectionElement);
      });
    };
  }, [navigate]);

  return (
    <header className="fixed w-full bg-gray-800 text-white shadow-lg z-10 transition-transform duration-300">
      <nav className="container mx-auto flex justify-center space-x-8 py-4">
        {['home', 'skills', 'experience', 'projects', 'contact'].map((section) => (
          <a
            key={section}
            href={`#${section}`}
            className={`hover:text-blue-400 ${activeSection === section ? 'text-blue-400 font-bold' : ''}`}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Navbar;
