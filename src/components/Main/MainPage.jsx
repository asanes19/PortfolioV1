import useActiveSection from "./../../hooks/useActiveSection";
import MainSide from "./../Sidebar/MainSide";
import MainContent from "./MainContent";
import { useEffect } from "react";

const MainPage = () => {
  const sectionIds = ["about", "experience", "projects"];
  const activeSection = useActiveSection(sectionIds);

  useEffect(() => {
    document.title = "Abdelrahman Sherif — Software Engineer";
  }, []);

  return (
    <div className="relative text-slate-600 antialiased selection:bg-slate-300 selection:text-slate-900">
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:justify-between md:gap-4">
          <div className="md:w-[48%] md:sticky top-0 self-start">
           <MainSide activeSection={activeSection} />
          </div>
          <div className=" md:w-[52%]">
            <MainContent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
