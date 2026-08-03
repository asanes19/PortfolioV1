import { useParams, useNavigate } from "react-router-dom";
import { IoChevronBackOutline } from "react-icons/io5";
import { projectsData } from "../../constants/projectsData";
import ProjectHeader from "./ProjectDetails/ProjectHeader";
import ImageSlider from "./ProjectDetails/ImageSlider";

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

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

  const { caseStudy } = project;

  // Case-study sections in render order. Dividers are applied between rendered
  // entries below, so omitting any section leaves no stray hairline.
  const caseStudySections = caseStudy
    ? [
        // Stats row
        caseStudy.stats?.length > 0 && (
          <div className="flex flex-wrap gap-10 py-8">
            {caseStudy.stats.map((stat, i) => (
              <div key={i} className="flex flex-col gap-1">
                <span className="text-4xl font-semibold text-heading">
                  {stat.value}
                </span>
                <span className="text-sm text-subtle">{stat.label}</span>
              </div>
            ))}
          </div>
        ),

        // The Problem
        caseStudy.problem && (
          <div className="flex flex-col gap-3 py-8">
            <span className="text-[10px] md:text-[11px] uppercase tracking-[0.1em] text-subtle">
              The Problem
            </span>
            <p className="text-base leading-relaxed text-body">
              {caseStudy.problem}
            </p>
          </div>
        ),

        // What I Built
        caseStudy.built?.length > 0 && (
          <div className="flex flex-col gap-4 py-8">
            <span className="text-[10px] md:text-[11px] uppercase tracking-[0.1em] text-subtle">
              What I Built
            </span>
            <ul className="flex flex-col gap-3">
              {caseStudy.built.map((item, i) => (
                <li
                  key={i}
                  className="flex gap-3 items-start text-base leading-relaxed text-body"
                >
                  <span className="mt-2 w-2 h-2 rounded-full bg-subtle shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ),

        // The Outcome — visually emphasized
        caseStudy.outcome && (
          <div className="flex flex-col gap-3 py-8 px-6 mt-2 bg-card-alt rounded-xl border border-divider">
            <span className="text-[10px] md:text-[11px] uppercase tracking-[0.1em] text-subtle">
              The Outcome
            </span>
            <p className="text-base leading-relaxed text-heading font-medium">
              {caseStudy.outcome}
            </p>
          </div>
        ),
      ].filter(Boolean)
    : [];

  return (
    <div className="relative text-body bg-bg antialiased selection:bg-accent selection:text-white">
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 md:px-12">
        <div className="flex flex-col py-20">
          <div className="flex flex-col justify-center items-center gap-8 text-center md:text-left w-full">

            <ProjectHeader project={project} />

            <div className="w-full">
              <ImageSlider project={project} />
            </div>

            {caseStudySections.length > 0 && (
              <div className="w-full flex flex-col mt-2">
                {caseStudySections.map((section, i) => (
                  <div key={i}>
                    {i > 0 && <div className="w-full h-px bg-divider" />}
                    {section}
                  </div>
                ))}
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;