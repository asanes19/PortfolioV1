import experienceData from "../../data/experienceData";

const Experience = () => {
  return (
    <div className="space-y-12">
      {experienceData.map((exp, index) => (
        <div key={index} className="flex flex-col md:flex-row gap-4 md:gap-8">
          {/* Left: Date */}
          <div className="min-w-[150px] text-xs text-slate-500 uppercase tracking-wide pt-1">
            {exp.date}
          </div>

          {/* Right: Content */}
          <div className="space-y-3 max-w-[440px]">
            <div>
              <h3 className="font-semibold text-slate-700 text-sm">
                {exp.role} · {exp.company}
              </h3>
              <p className="text-slate-600 text-sm pt-2 leading-relaxed">
                {exp.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-2 pt-2">
              {exp.stack.map((tech, i) => (
                <span
                  key={i}
                  className="tech-pill"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experience;
