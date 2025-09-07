import { motion } from 'framer-motion';
import { Code2, Database, Globe, Terminal, Cloud, Bot, TestTube } from 'lucide-react';

const SkillCard = ({ title, skills, icon: Icon, delay }) => (
  <motion.div
    className="bg-opacity-10 bg-white backdrop-blur-lg rounded-xl p-6 shadow-xl border border-gray-700"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    whileHover={{ scale: 1.05 }}
  >
    <div className="flex items-center mb-4">
      <Icon className="w-8 h-8 text-blue-500 mr-3" />
      <h3 className="text-2xl font-semibold gradient-text">{title}</h3>
    </div>
    <p className="text-gray-300">{skills.join(', ')}</p>
  </motion.div>
);

const Skills = () => {
  const skillsData = [
    {
      title: 'Programming Languages',
      skills: ['Python', 'Java', 'JavaScript', 'C++', 'C', 'SQL'],
      icon: Code2,
    },
    {
      title: 'Frontend Technologies',
      skills: ['React', 'Redux', 'AngularJS', 'HTML5', 'CSS3'],
      icon: Globe,
    },
    {
      title: 'Backend Technologies',
      skills: ['Flask', 'FastAPI', 'Node.js', 'REST APIs', 'GraphQL'],
      icon: Terminal,
    },
    {
      title: 'Databases',
      skills: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis'],
      icon: Database,
    },
    {
      title: 'Cloud & DevOps',
      skills: ['AWS', 'Azure', 'GCP', 'Docker', 'Kubernetes', 'OpenShift', 'Linux'],
      icon: Cloud,
    },
    {
      title: 'Testing & Automation',
      skills: ['Jest', 'Cypress', 'API Testing', 'Test Automation', 'Ansible'],
      icon: TestTube,
    },
    {
      title: 'AI/ML Frameworks',
      skills: ['PyTorch', 'TensorFlow', 'Scikit-learn', 'Pandas', 'NumPy', 'LangChain'],
      icon: Bot,
    },
  ];

  return (
    <section id="skills" className="min-h-screen flex flex-col items-center justify-center py-20 px-4">
      <motion.h2 
        className="text-4xl font-bold mb-12 gradient-text"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Skills & Expertise
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl">
        {skillsData.map((skill, index) => (
          <SkillCard key={skill.title} {...skill} delay={index * 0.15} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
