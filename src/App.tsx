import ProjectCard from './components/ProjectCard';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiPython,
  SiNodedotjs,
  SiTailwindcss,
} from 'react-icons/si';

// Projects
const projects = [
  {
    title: 'Project One',
    description: 'A cool project I built with React and TypeScript.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
    githubUrl: 'https://github.com/sourcer-amir/project-one',
    liveUrl: 'https://your-project.vercel.app',
  },
  {
    title: 'Project Two',
    description: 'Another awesome project demonstrating my skills.',
    technologies: ['Python', 'FastAPI', 'PostgreSQL'],
    githubUrl: 'https://github.com/sourcer-amir/project-two',
  },
];

// Skills
const skills = [
  { name: 'React', icon: SiReact, color: 'text-blue-400' },
  { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-600' },
  { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-400' },
  { name: 'Python', icon: SiPython, color: 'text-green-400' },
  { name: 'Node.js', icon: SiNodedotjs, color: 'text-green-500' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-cyan-400' },
];

export default function App() {
  return (
    <div className="min-h-screen bg-gray-950">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-950/80 backdrop-blur-sm z-50 border-b border-gray-800">
        <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-[--color-accent]">Santiago Amir Rodríguez González</h1>
          <div className="flex items-center gap-6">
            <a href="#about" className="hover:text-[--color-accent] transition-colors">About</a>
            <a href="#skills" className="hover:text-[--color-accent] transition-colors">Skills</a>
            <a href="#projects" className="hover:text-[--color-accent] transition-colors">Projects</a>
            <a 
              href="https://github.com/sourcer-amir" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-[--color-accent] transition-colors"
            >
              <FiGithub size={20} />
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center max-w-2xl">
          <h1 className="text-6xl font-bold mb-6">
            Hello <span className="text-[--color-accent]">World</span>
          </h1>
          <p className="text-xl text-gray-400 mb-8">
            I'm a developer studying at Tecnológico de Monterrey, passionate about building great software.
          </p>
          <a 
            href="#about" 
            className="bg-[--color-accent] hover:bg-[--color-accent-hover] px-6 py-3 rounded-lg font-medium transition-colors"
          >
            Get to know me
          </a>
        </div>
      </section>

      {/* About */}
      <section id="about" className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-12">
          About <span className="text-[--color-accent]">Me</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-gray-400 leading-relaxed mb-6">
              I'm currently studying at <strong className="text-[--color-accent]">Tecnológico de Monterrey</strong>, 
              developing my skills in computer science and software engineering.
            </p>
            <p className="text-gray-400 leading-relaxed mb-6">
              In my free time, I enjoy solving problems on <strong className="text-[--color-accent]">LeetCode</strong> 
              and building projects with modern technologies.
            </p>
            <p className="text-gray-400 leading-relaxed">
              I'm passionate about creating solutions that make a real impact.
            </p>
          </div>
          <div className="w-64 h-64 mx-auto bg-gradient-to-br from-[--color-accent] to-blue-600 rounded-full flex items-center justify-center">
            <span className="text-4xl">👨‍💻</span>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="bg-gray-900 py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">
            My <span className="text-[--color-accent]">Skills</span>
          </h2>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-8">
            {skills.map((skill) => (
              <div key={skill.name} className="text-center">
                <skill.icon size={48} className={`mx-auto mb-3 ${skill.color}`} />
                <p className="font-medium">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-12">
          My <span className="text-[--color-accent]">Projects</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-12">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="flex justify-center gap-6 mb-6">
            <a 
              href="https://github.com/sourcer-amir" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-[--color-accent] transition-colors"
            >
              <FiGithub size={24} />
            </a>
            <a 
              href="https://www.linkedin.com/in/santiago-amir-rodriguez-gonzalez/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-[--color-accent] transition-colors"
            >
              <FiLinkedin size={24} />
            </a>
          </div>
          <p className="text-gray-500">© 2025 Santiago Amir Rodríguez González. Built with React & Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  );
}