import experienceData from "../../constants/experienceData";

const Experience = () => {

  return (
    <div className="space-y-10">
      {experienceData.map((exp, index) => (
        <div key={index} className="border-b border-divider last:border-none pb-8">
          
          {/* Top Row */}
          <div className="flex items-start justify-between">
            
            {/* Left */}
            <div>
              <h3 className="text-heading font-medium">
                {exp.company}
              </h3>

              <p className="text-accent text-sm" >
                {exp.role}
              </p>
            </div>

            {/* Right (Date) */}
            <span className="text-sm text-subtle whitespace-nowrap">
              {exp.date}
            </span>

          </div>

          {/* Description */}
          <p className="text-body text-sm mt-3 leading-relaxed max-w-[600px]">
            {exp.description}
          </p>

        </div>
      ))}
    </div>
  );
};

export default Experience;
