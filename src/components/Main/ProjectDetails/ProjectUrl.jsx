
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
          <button className="text-sm px-6 py-2 rounded-full  border border-slate-700 text-slate-700 cursor-pointer  hover:bg-slate-700 hover:text-white transition">
            View Demo
          </button>
        </a>
      ) : (
        <span className="text-xs text-slate-500 italic">No URL</span>
      )}
    </div>
  );
};

export default ProjectUrl;
