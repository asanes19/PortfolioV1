const skillGroups = {
  "Core Stack": [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Tailwind CSS"
  ],
  "Front-End": [
    "HTML",
    "CSS",
    "SASS",
    "Bootstrap",
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
  "Data & Analytics": [
    "Python",
    "SQL",
    "Power BI",
    "SQLite"
  ],
  "DevOps & Tools": [
    "Git",
    "GitHub",
    "CI/CD",
    "FileZilla",
    "AWS (SES, SNS)"
  ],
  "Design & Collaboration": [
    "Figma",
    "Canva",
    "Jira",
    "Confluence",
    "Scrum",
    "Agile"
  ],
  "Other": [
    "WordPress"
  ]
};

const Skills = () => {
  return (
<section className="space-y-4 text-sm text-gray-300">
  {Object.entries(skillGroups).map(([group, skills]) => (
    <div key={group} className="flex items-start gap-6">
      
      {/* Left Label */}
      <span className="w-32 shrink-0 text-gray-500 font-medium">
        {group}
      </span>

      {/* Skills Inline */}
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span key={skill} className="tech-pill">
            {skill}
          </span>
        ))}
      </div>

    </div>
  ))}
</section>
  );
};

export default Skills;