const skillGroups = {
  "Core Stack": [
    "React",
    "Next.js",
    "JavaScript",
    "TypeScript",
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
    "Context API",
    "React Query",
    "React Hook Form",
    "Zod",
    "Material UI",
    "Shadcn/UI",
    "ECharts",
    "React Three Fiber (R3F)",
    "Three.js",
    "WebGL"
  ],
  "Testing": [
    "Vitest",
    "React Testing Library",
    "Playwright"
  ],
  "API & Integrations": [
    "REST APIs",
    "WebSockets",
    "Postman",
    "Swagger",
    "API Documentation"
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
    "WordPress",
    "Performance Optimization",
    "Responsive Design",
    "UX/UI",
    "Accessibility (WCAG)"
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