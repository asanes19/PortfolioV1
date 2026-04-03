import menuItems from "../../data/listItem";

const List = ({ activeSection }) => {
  return (
    <div className="hidden md:flex flex-col space-y-6 pt-24">
      {menuItems.map((item) => (
        <div
          key={item.id}
          className="flex cursor-pointer items-center gap-4 group transition-all duration-200"
        >
          <div
            className={`h-px transition-all ${
              activeSection === item.id
                ? "bg-slate-800 w-16"
                : "bg-slate-300 w-8 group-hover:w-16 group-hover:bg-slate-800"
            }`}
          />
          <span
            className={`text-xs tracking-widest uppercase transition-colors duration-200 ${
              activeSection === item.id
                ? "text-slate-800 font-semibold"
                : "text-slate-400 group-hover:text-slate-800 group-hover:font-semibold"
            }`}
          >
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default List;
