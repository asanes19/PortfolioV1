import { useNavigate } from "react-router-dom";
import { IoChevronBackOutline } from "react-icons/io5";
import { projectsData } from "../../data/projectsData";
import { normalizeTech } from "../../utils/normalizeTech";
import { getImageUrl } from "../../utils/getImageUrl";

const AllProjects = () => {
  const navigate = useNavigate();

  const projects = projectsData.slice().sort((a, b) => (a.order ?? 0) - (b.order ?? 0));

  return (
    <section className="text-slate-700 max-w-screen-xl mx-auto py-20 px-4">
      <div className="flex items-center gap-4 mb-10">
        <button
          className="text-slate-700 border cursor-pointer border-slate-700 rounded-full p-2 underline text-sm text-left"
          onClick={() => navigate(-1)}
        >
          <IoChevronBackOutline />
        </button>
        <h1 className="text-4xl font-bold text-heading">All Projects</h1>
      </div>

      <div className="overflow-x-auto">
        <div className="hidden md:flex justify-between text-sm font-semibold text-slate-700 tracking-wider mb-10 text-center">
          <div className="w-[120px]"></div>
          <div className="w-[250px] text-left">Project</div>
          <div className="w-[400px] text-left">Description</div>
          <div className="w-[230px] text-left">Link</div>
          <div className="w-[250px] text-left">Built With</div>
        </div>

        <div>
          {projects.map((proj) => {
            const techList = normalizeTech(proj.tech);
            const imageUrl = getImageUrl(proj.mainImage);

            return (
              <div
                onClick={() => navigate(`/project/${proj.slug}`)}
                key={proj.slug}
                className="card-hover border-b cursor-pointer group border-slate-300 last:border-none px-2 py-8 justify-between flex flex-col md:flex-row gap-6 items-center md:items-start"
              >
                {/* Project Image */}
                <div className="w-[120px] shrink-0">
                  {imageUrl ? (
                    <img
                      src={imageUrl}
                      alt={proj.title}
                      className="w-full h-auto aspect-video object-cover rounded border border-slate-300 shadow-sm"
                    />
                  ) : (
                    <div className="w-full aspect-video bg-slate-200 rounded border border-slate-300 flex items-center justify-center text-[10px] text-slate-400 font-medium italic">
                      No Image
                    </div>
                  )}
                </div>

                <h3 className="font-semibold w-[250px] text-heading group-hover:text-heading/80 transition-colors duration-300">
                  {proj.title}
                </h3>

                <p className="text-sm text-slate-500 w-[400px]">{proj.description}</p>

                <div className="w-[230px]">
                  {proj.projectUrl ? (
                    <a
                      href={proj.projectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-slate-500 break-all"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {proj.projectUrl.replace(/^https?:\/\//, "")}
                    </a>
                  ) : (
                    <span className="text-xs text-slate-500 italic">No URL</span>
                  )}
                </div>

                <div className="flex w-[250px] flex-wrap gap-2">
                  {techList.map((t, i) => (
                    <span
                      key={`${proj.slug}-tech-${i}`}
                      className="tech-pill h-fit"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AllProjects;
