import { FiGithub, FiExternalLink } from 'react-icons/fi';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl?: string; // Make it optional
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export default function ProjectCard({ title, description, imageUrl, technologies, githubUrl, liveUrl }: ProjectCardProps) {
  return (
    <div className="bg-gray-900 rounded-lg border border-gray-800 hover:border-[--color-accent] transition-all overflow-hidden h-full flex flex-col">
      {/* Project Image/GIF */}
      {imageUrl && (
        <div className="relative h-48 overflow-hidden bg-gray-800">
          <img 
            src={imageUrl} 
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
          />
        </div>
      )}
      
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-gray-400 mb-4 flex-1">{description}</p>
        
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
    </div>
  );
}