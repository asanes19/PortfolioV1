import TechStack from "./TechStack";
import ProjectUrl from "./ProjectUrl";
import Title from "./Title";

const ProjectHeader = ({ project }) => {
  return (
    <div className="flex flex-col w-full justify-between gap-6">
      <div className="flex flex-col md:flex-row justify-between gap-8">
        <Title project={project} />
        <ProjectUrl project={project} />
      </div>

      <div className="flex gap-8 flex-col md:flex-row items-end h-full justify-between">
        <p className="max-w-[640px]">{project.description}</p>

        <TechStack project={project} />
      </div>
    </div>
  );
};

export default ProjectHeader;
