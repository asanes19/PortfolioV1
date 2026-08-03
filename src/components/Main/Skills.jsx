const skillGroups = {
  "Core Stack": [
    "React",
    "Next.js",
    "JavaScript",
    "TypeScript",
    "Tailwind CSS"
  ],
  "Back-End": [
    "Node.js",
    "Express",
    "REST APIs",
    "PHP",
    "Python",
    "WebSockets",
    "Authentication & RBAC"
  ],
  "Database": [
    "PostgreSQL",
    "SQL",
    "MySQL",
    "MongoDB",
    "SQLite",
    "Data Modelling",
    "ETL"
  ],
  "Front-End": [
    "HTML",
    "CSS",
    "SASS",
    "Framer Motion",
    "Zustand",
    "Context API",
    "React Query",
    "React Hook Form",
    "Zod",
    "Material UI",
    "Shadcn/UI"
  ],
  "Testing": [
    "Vitest",
    "React Testing Library",
    "Playwright"
  ],
  "API & Integrations": [
    "Postman",
    "Swagger",
    "API Documentation"
  ],
  "Data & Analytics": [
    "Power BI",
    "ECharts"
  ],
  "DevOps & Tools": [
    "Git",
    "GitHub",
    "CI/CD",
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
    "Odoo",
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
