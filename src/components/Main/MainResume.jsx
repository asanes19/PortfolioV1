import React from "react";
import { MdArrowOutward } from "react-icons/md";

const MainResume = () => {
  return (
    <a
      href="/AbdelrahmanSherif.pdf" // ⬅️ Replace with your actual file name
      target="_blank"
      rel="noopener noreferrer"
      className="flex group items-center gap-2 cursor-pointer text-heading hover:text-body"
    >
      <h2>View Full Résumé</h2>
      <span className="group-hover:pb-1 group-hover:pl-1 transition-all duration-300 ease-in-out">
        <MdArrowOutward />
      </span>
    </a>
  );
};

export default MainResume;
