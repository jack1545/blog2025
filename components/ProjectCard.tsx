import { Project } from '@/lib/projects-data';

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block p-6 bg-card-bg border border-border-color rounded-lg hover:border-accent-blue transition-all duration-300 transform hover:-translate-y-1 group"
    >
      <h3 className="font-bold text-accent-blue group-hover:underline">{project.title}</h3>
      <p className="text-sm text-text-secondary mt-2 mb-4 h-10">{project.description}</p>
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span key={tag} className="font-mono text-xs bg-editor-bg text-accent-green px-2 py-1 rounded">
            {tag}
          </span>
        ))}
      </div>
    </a>
  );
} 