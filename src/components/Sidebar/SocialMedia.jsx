import { FaLinkedinIn, FaBehance, FaWhatsapp, FaEnvelope } from "react-icons/fa";

const icons = [
  {
    icon: <FaLinkedinIn />,
    url: "https://www.linkedin.com/in/abdelrahmansherif1930/",
    label: "LinkedIn",
  },
  {
    icon: <FaBehance />,
    url: "https://www.behance.net/abdelrasherif24",
    label: "Behance",
  },
  {
    icon: <FaWhatsapp />,
    url: "https://wa.me/971562588105",
    label: "WhatsApp",
  },
  {
    icon: <FaEnvelope />,
    url: "mailto:asherif3001@gmail.com",
    label: "Email",
    sameTab: true,
  },
];

const SocialMedia = () => {
  return (
    <div className="flex gap-4 text-xl text-body pt-6">
      {icons.map((item, index) => (
        <a
          key={index}
          href={item.url}
          target={item.sameTab ? undefined : "_blank"}
          rel={item.sameTab ? undefined : "noopener noreferrer"}
          aria-label={item.label}
          className="hover:text-heading transition-colors duration-200"
        >
          {item.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialMedia;
