import ProjectCard from './components/ProjectCard';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
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
  {
    title: 'Project One',
    description: 'A cool project I built with React and TypeScript.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
    githubUrl: 'https://github.com/sourcer-amir/project-one',
    liveUrl: 'https://your-project.vercel.app',
  },
  {
    title: 'Project One',
    description: 'A cool project I built with React and TypeScript.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
    githubUrl: 'https://github.com/sourcer-amir/project-one',
    liveUrl: 'https://your-project.vercel.app',
  },
  {
    title: 'Project One',
    description: 'A cool project I built with React and TypeScript.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
    githubUrl: 'https://github.com/sourcer-amir/project-one',
    liveUrl: 'https://your-project.vercel.app',
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
          <h1 className="text-xl font-bold text-[--color-accent]">Santiago Rodríguez</h1>
          <div className="flex items-center gap-6">
            {/* CV Download Dropdown - FIRST */}
            <div className="relative group">
              <button className="bg-[--color-accent] hover:bg-[--color-accent-hover] px-4 py-2 rounded-lg font-medium transition-colors flex items-center gap-2">
                Download CV
                <span className="text-xs">▼</span>
              </button>
              
              <div className="absolute right-0 mt-2 w-48 bg-gray-900 border border-gray-800 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                <a 
                  href="/Portfolio/cv-en.pdf" 
                  download="Santiago_Rodriguez_CV_EN.pdf"
                  className="block px-4 py-3 hover:bg-gray-800 rounded-t-lg transition-colors"
                >
                  🇺🇸 English
                </a>
                <a 
                  href="/Portfolio/cv-es.pdf" 
                  download="Santiago_Rodriguez_CV_ES.pdf"
                  className="block px-4 py-3 hover:bg-gray-800 rounded-b-lg transition-colors"
                >
                  🇪🇸 Español
                </a>
              </div>
            </div>
            
            <a href="#about" className="hover:text-[--color-accent] transition-colors">About</a>
            <a href="#skills" className="hover:text-[--color-accent] transition-colors">Skills</a>
            <a href="#projects" className="hover:text-[--color-accent] transition-colors">Projects</a>
            <a href="#contact" className="hover:text-[--color-accent] transition-colors">Contact</a>
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
          <div className="w-64 h-64 mx-auto rounded-full overflow-hidden border-4 border-[--color-accent]">
            <img 
              src="/Portfolio/profile.png"  
              alt="Santiago Amir Rodríguez González" 
              className="w-full h-full object-cover"
            />
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
<section 
  id="projects" 
  className="py-20 overflow-hidden"
  onWheel={(e) => {
    const target = e.target as HTMLElement;
    const scrollContainer = target.closest('.horizontal-scroll');
    if (scrollContainer) {
      e.preventDefault();
      scrollContainer.scrollLeft += e.deltaY * 10; // Note for future self: Adjust scroll speed here
    }
  }}
>
  <div className="max-w-6xl mx-auto px-6">
    <h2 className="text-4xl font-bold text-center mb-12">
      My <span className="text-[--color-accent]">Projects</span>
    </h2>
    
    {/* Horizontal Scroll Container */}
    <div className="horizontal-scroll overflow-x-auto overflow-y-hidden pb-8 scrollbar-hide touch-pan-x">
      <div className="flex gap-8 w-max">
        {projects.map((project, index) => (
          <div key={index} className="w-96 flex-shrink-0">
            <ProjectCard {...project} />
          </div>
        ))}
      </div>
    </div>
    
    <p className="text-center text-gray-500 text-sm mt-4">
      ← Scroll horizontally to see all projects →
    </p>
  </div>
</section>

      {/* Footer / Contact */}
      <footer id="contact" className="bg-gray-900 border-t border-gray-800 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8">
            Get in <span className="text-[--color-accent]">Touch</span>
          </h2>
        <div className="flex justify-center gap-6 mb-12">
          <a 
          href="https://github.com/sourcer-amir" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:text-[--color-accent] transition-colors"
          title="GitHub"
          >
          <FiGithub size={28} />
          </a>
          <a 
            href="https://www.linkedin.com/in/santiago-amir-rodriguez-gonzalez/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-[--color-accent] transition-colors"
            title="LinkedIn"
          >
          <FiLinkedin size={28} />
          </a>
          <a 
            href="mailto:santiro.amir@gmail.com"
            className="hover:text-[--color-accent] transition-colors"
            title="Email"
          >
          <FiMail size={28} />
          </a>
        </div>
        <p className="text-gray-500 text-sm">
          © 2025 Santiago Rodríguez. Built with React & Tailwind CSS.
        </p>
        </div>
      </footer>
    </div>
  );
}