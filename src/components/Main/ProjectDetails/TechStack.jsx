
const TechStack = ({ project }) => {
  return (
    <div className="flex gap-2 flex-wrap">
      {project.tech?.map((t, i) => (
        <span
          key={i}
          className="tech-pill"
        >
          {t.tech || t}
        </span>
      ))}
    </div>
  );
};

export default TechStack;
