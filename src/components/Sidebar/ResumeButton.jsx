import { MdArrowOutward } from "react-icons/md";

const ResumeButton = () => {
  return (
    <a
      href="/AbdelrahmanSherifFullStackDeveloper.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="flex group items-center gap-2 cursor-pointer border border-border-subtle bg-transparent text-body px-4 py-2 w-fit rounded-md transition-colors duration-200 hover:text-heading hover:border-accent"
    >
      <h2>View Full Résumé</h2>
      <span className="group-hover:pb-1 group-hover:pl-1 transition-all duration-300 ease-in-out">
        <MdArrowOutward />
      </span>
    </a>
  );
};

export default ResumeButton;
