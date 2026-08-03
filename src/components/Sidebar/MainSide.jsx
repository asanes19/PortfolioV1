import ProfileHeading from "./ProfileHeading";
import List from "./List";
import SocialMedia from "./SocialMedia";
import ResumeButton from "./ResumeButton";

const MainSide = ({ activeSection }) => {
  return (
    <div className="flex flex-col gap-10 w-full px-6 md:px-0 py-12 md:py-20">
      <div>
        <div className="flex flex-col gap-4">
          <ProfileHeading />
          <ResumeButton />
        </div>
        <List activeSection={activeSection} />
      </div>
      <img src="/MyLogo.png" alt="My Logo" className="w-[40%] opacity-[5%]" />

      <div>
       <SocialMedia />
      </div>
    </div>
  );
};

export default MainSide;
