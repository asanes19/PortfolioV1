import { useParams, useNavigate } from "react-router-dom";
import { IoChevronBackOutline } from "react-icons/io5";
import { projectsData } from "../../data/projectsData";
import ProjectHeader from "./ProjectDetails/ProjectHeader";
import ImageSlider from "./ProjectDetails/ImageSlider";
import Accordion from "./ProjectDetails/Accordion";

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Look up by slug so the page works on refresh / shared links
  const project = projectsData.find((p) => p.slug === id);

  if (!project)
    return (
      <div className="flex flex-col items-center justify-center min-h-screen gap-4 text-slate-600">
        <h2 className="text-2xl font-semibold text-heading">Project not found</h2>
        <p className="text-sm">The project you're looking for doesn't exist or has been moved.</p>
        <button
          onClick={() => navigate("/")}
          className="mt-2 text-sm font-medium text-heading hover:text-slate-600 transition-colors flex items-center gap-2"
        >
          <IoChevronBackOutline /> Back to Home
        </button>
      </div>
    );

  return (
    <div className="relative text-slate-600 antialiased selection:bg-slate-300 selection:text-slate-900">
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 md:px-12">
        <div className="flex flex-col py-20">

          {/* Back navigation */}
          <button
            onClick={() => navigate(-1)}
            className="self-start mb-8 text-slate-500 hover:text-heading transition-colors flex items-center gap-2 text-sm"
          >
            <IoChevronBackOutline /> Back
          </button>

          {/* Top section: Info & Slider */}
          <div className="flex flex-col justify-center items-center gap-12 text-center md:text-left w-full">
            <ProjectHeader project={project} />

            <div className="w-full">
              <ImageSlider project={project} />
            </div>

            <div className="w-full">
              {project.detailedDesc && (
                <p className="whitespace-pre-line text-lg text-slate-700 leading-relaxed mb-10">
                  {project.detailedDesc}
                </p>
              )}

              {project.explanation && Array.isArray(project.explanation) && (
                <Accordion items={project.explanation} />
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
