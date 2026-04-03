import { MdArrowOutward } from "react-icons/md";

const ResumeButton = () => {
  return (
    <a
      href="/AbdelrahmanSherif.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="flex group items-center gap-2 cursor-pointer text-heading hover:text-slate-600"
    >
      <h2>View Full Résumé</h2>
      <span className="group-hover:pb-1 group-hover:pl-1 transition-all duration-300 ease-in-out">
        <MdArrowOutward />
      </span>
    </a>
  );
};

export default ResumeButton;
