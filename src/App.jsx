import Contact from './components/Contact';
import Experience from './components/Experience';
import Home from './components/Home';
import Navbar from './components/NavBar';
import Projects from './components/Projects';
import Skills from './components/Skills';

const App = () => {
  return (
    <div>
      <Navbar />
      <main> 
        <Home />
        <Skills /> 
        <Experience />
        <Projects />
        <Contact />
      </main>
    </div>
  );
};

export default App;
