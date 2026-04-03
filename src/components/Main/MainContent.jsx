import Description from "./Description";
import Experience from "./Experience";
import Projects from "./Projects";
import Quote from "./Quote";
import Skills from "./Skills";

const MainContent = () => {
  return (
    <div className="md:space-y-28 space-y-14 px-6 md:px-0 py-12 md:py-20">
      <section className="flex flex-col gap-8 border-b border-slate-200 pb-20" id="about">
        <Description />
        <Skills />
      </section>

      <section id="experience">
        <div className="space-y-12 border-b border-slate-200 pb-20">
          <Experience />
        </div>
      </section>

      <section  id="projects">
        <Projects />
      </section>

      <Quote />
    </div>
  );
};


export default MainContent;
