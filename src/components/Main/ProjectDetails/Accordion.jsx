import { useState } from "react";
import { IoChevronDownOutline } from "react-icons/io5";

const AccordionItem = ({ title, content, isOpen, onClick }) => {
  return (
    <div className={  `${isOpen ? "" : ""} overflow-hidden p-4`}>
      <button
        className="w-full flex justify-between items-center py-4  transition-colors duration-200 cursor-pointer"
        onClick={onClick}
      >
        <span className="text-lg font-semibold text-heading">{title}</span>
        <IoChevronDownOutline
          className={`text-slate-500 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`transition-[max-height,opacity] duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="p-4">
          <ul className="list-disc list-outside space-y-3 text-slate-600 leading-relaxed pl-6">
            {content.map((para, i) => (
              <li key={i} className="pl-1">
                {para}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const Accordion = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(0); // Default open first item

  return (
    <div className="w-full ">
      {items.map((item, idx) => (
        <AccordionItem
          key={idx}
          title={item.title}
          content={item.content}
          isOpen={openIndex === idx}
          onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
        />
      ))}
    </div>
  );
};

export default Accordion;
