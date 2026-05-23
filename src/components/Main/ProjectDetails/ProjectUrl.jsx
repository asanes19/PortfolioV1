
const ProjectUrl = ({ project }) => {
  return (
    <div>
      {project.projectUrl ? (
        <a
          href={project.projectUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()} // Prevent row click
        >
          <button className="text-sm px-6 py-2 rounded-full border border-transparent bg-accent text-white cursor-pointer hover:bg-accent/80 transition shadow-[0px_4px_12px_rgba(79,142,247,0.2)]">
            View Demo
          </button>
        </a>
      ) : (
        <span className="text-xs text-subtle italic">Private Project</span>
      )}
    </div>
  );
};

export default ProjectUrl;
