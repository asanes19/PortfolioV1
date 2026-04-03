
const TechStack = ({ project }) => {
  return (
    <div className="flex gap-2 flex-wrap">
      {project.tech?.map((t, i) => (
        <span
          key={i}
          className="bg-slate-700 text-[#e2e8f0] h-fit text-xs px-3 py-1 rounded-full font-medium"
        >
          {t.tech || t}
        </span>
      ))}
    </div>
  );
};

export default TechStack;
