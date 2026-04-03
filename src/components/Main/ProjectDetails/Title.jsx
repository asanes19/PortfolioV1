import { IoChevronBackOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
const Title = ({ project }) => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center gap-4">
      <button
        className="text-slate-700 cursor-pointer border border-slate-700 rounded-full p-2 underline text-sm text-center"
        onClick={() => navigate(-1)}
      >
        <IoChevronBackOutline />
      </button>
      <h1 className="text-xl md:text-2xl font-bold text-heading">{project.title}</h1>
    </div>
  );
};

export default Title;
  