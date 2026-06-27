import React from 'react';
import { ExternalLink } from 'lucide-react';

const Github = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
    <path d="M9 18c-4.51 2-5-2-7-2"/>
  </svg>
);

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all duration-300 group flex flex-col h-full backdrop-blur-sm">
      <div className="h-48 bg-gradient-to-br from-blue-900/40 to-purple-900/40 relative overflow-hidden flex items-center justify-center border-b border-white/10">
        {/* Placeholder image area */}
        <div className="absolute inset-0 bg-[#0a0a0a]/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm z-10">
           <span className="text-white font-medium px-4 py-2 bg-blue-500/20 border border-blue-500/50 rounded-lg">View Details</span>
        </div>
        <div className="text-6xl text-white/10 font-bold tracking-tighter uppercase transform -rotate-12 group-hover:scale-110 transition-transform duration-500">
          {project.title.substring(0, 4)}
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">{project.title}</h3>
            <p className="text-sm font-medium text-purple-400">{project.type} &bull; {project.status}</p>
          </div>
        </div>
        
        <p className="text-gray-400 mb-6 flex-grow">{project.description}</p>
        
        <div className="mb-6">
          <h4 className="text-sm font-bold text-gray-300 mb-2 uppercase tracking-wider">Key Features</h4>
          <ul className="list-disc list-inside text-sm text-gray-400 space-y-1">
            {project.features.map((feature, idx) => (
              <li key={idx} className="line-clamp-1">{feature}</li>
            ))}
          </ul>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.techStack.map((tech, idx) => (
            <span key={idx} className="text-xs font-medium px-2 py-1 bg-white/10 text-gray-300 rounded-md">
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex gap-4 mt-auto pt-4 border-t border-white/10">
          <a
            href={project.liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors"
          >
            <ExternalLink size={16} /> Live Demo
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg text-sm font-medium transition-colors border border-white/10"
          >
            <Github size={16} /> GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
