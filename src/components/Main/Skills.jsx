const skillGroups = {
  "Front-End": [
    "React",
    "Next.js",
    "JavaScript",
    "TypeScript",
    "HTML",
    "CSS",
    "Tailwind",
    "Bootstrap",
    "SASS",
    "Framer Motion",
    "GSAP",
    "jQuery",
    "Zustand",
    "React Query",
    "Material UI",
    "Shadcn/UI",
    "ECharts",
    "Performance Optimization",
    "Responsive Design",
    "UX/UI"
  ],
  "API & Integrations": [
    "REST APIs",
    "API Documentation",
    "Postman",
    "Swagger"
  ],
  "Data Analysis": [
    "Python",
    "SQL",
    "Power BI"
  ],
  "Version Control & Deployment": [
    "Git",
    "GitHub",
    "GitLab",
    "CI/CD",
    "FileZilla"
  ],
  "Agile & Collaboration": [
    "Agile methodologies",
    "Scrum",
    "Jira",
    "Confluence"
  ],
  "Other Tools & Platforms": [
    "AWS (SES, SNS)",
    "WordPress",
    "Figma",
    "Canva"
  ]
};

const Skills = () => {
  return (
    <section className="space-y-5 text-sm">
      {Object.entries(skillGroups).map(([group, skills]) => (
        <div
          key={group}
          className="flex flex-wrap items-center gap-x-3 gap-y-2"
        >
          {/* Group label */}
          <span className="font-semibold whitespace-nowrap">
            {group}:
          </span>

          {/* Pills */}
          {skills.map((skill) => (
            <span
              key={skill}
              className="tech-pill hover:bg-slate-300/60 transition"
            >
              {skill}
            </span>
          ))}
        </div>
      ))}
    </section>
  );
};

export default Skills;
