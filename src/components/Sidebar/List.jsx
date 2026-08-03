import menuItems from "../../constants/listItem";

const List = ({ activeSection }) => {
  return (
    <div className="hidden md:flex flex-col space-y-2 pt-24">
      {menuItems.map((item) => (
        <a
          href={`#${item.id}`}
          key={item.id}
          className={`cursor-pointer px-4 py-2 transition-colors duration-200 border-l-2 ${
            activeSection === item.id
              ? "border-accent text-white"
              : "border-transparent text-subtle hover:text-heading hover:border-border-subtle"
          }`}
        >
          <span className="text-[10px] md:text-[11px] tracking-[0.1em] uppercase font-semibold">
            {item.label}
          </span>
        </a>
      ))}
    </div>
  );
};

export default List;
