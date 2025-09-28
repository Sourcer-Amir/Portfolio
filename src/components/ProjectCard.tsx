import { FiGithub, FiExternalLink } from 'react-icons/fi';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export default function ProjectCard({ title, description, technologies, githubUrl, liveUrl }: ProjectCardProps) {
  return (
    <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-[--color-accent] transition-colors">
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-400 mb-4">{description}</p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {technologies.map((tech) => (
          <span key={tech} className="px-2 py-1 bg-gray-800 text-sm rounded">
            {tech}
          </span>
        ))}
      </div>
      
      <div className="flex gap-4">
        {githubUrl && (
          <a 
            href={githubUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[--color-accent] hover:text-[--color-accent-hover]"
          >
            <FiGithub size={16} />
            Code
          </a>
        )}
        {liveUrl && (
          <a 
            href={liveUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[--color-accent] hover:text-[--color-accent-hover]"
          >
            <FiExternalLink size={16} />
            Live
          </a>
        )}
      </div>
    </div>
  );
}