import { MdArrowOutward } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { projectsData } from "../../data/projectsData";
import { normalizeTech } from "../../utils/normalizeTech";
import { getImageUrl } from "../../utils/getImageUrl";

const Projects = () => {
  const navigate = useNavigate();

  const visibleProjects = projectsData.slice(0, 6);

  return (
    <div className="flex flex-col gap-6">
      {visibleProjects.map((project) => {
        const imageUrl = getImageUrl(project.mainImage);
        const techList = normalizeTech(project.tech);

        return (
          <div
            key={project.slug}
            onClick={() => navigate(`/project/${project.slug}`)}
            className="card-hover flex flex-col md:flex-row w-full gap-5 group cursor-pointer rounded-md md:p-4"
          >
            <div className="md:w-1/4">
              {imageUrl && (
                <img
                  src={imageUrl}
                  alt={project.title}
                  className="w-full max-w-[200px] rounded border-2 border-slate-300"
                />
              )}
            </div>
            <div className="md:w-3/4 flex flex-col gap-3">
              <div className="flex gap-2 items-center text-heading group-hover:text-heading/80 transition-colors duration-300">
                <h2 className="font-semibold">{project.title}</h2>
                <span className="group-hover:pb-1 group-hover:pl-1 transition-all duration-300 ease-in-out">
                  <MdArrowOutward />
                </span>
              </div>
              <p className="text-slate-600">{project.description}</p>
              <div className="flex gap-2 flex-wrap">
                {techList.map((techItem, i) => (
                  <span
                    key={i}
                    className="tech-pill"
                  >
                    {techItem}
                  </span>
                ))}
              </div>
            </div>
          </div>
        );
      })}

      <button
        onClick={() => navigate("/projects")}
        className="text-slate-800 font-semibold hover:text-slate-600 transition-all text-sm flex items-center gap-1 self-start mt-4"
      >
        View Full Project Archive <MdArrowOutward />
      </button>
    </div>
  );
};

export default Projects;
