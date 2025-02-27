import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export const contactButtons = [
  {
    button: <FaGithub />,
    className: "rounded-full m-0.02 p-6 shadow-lg shadow-gray-400 cursor-pointer hover:scale-110 ease-in duration-300",
    href: "https://github.com/itsjagdeep",
    label: "Github",
  },
  {
    button: <FaLinkedinIn />,
    className: "rounded-full m-0.02 p-6 shadow-lg shadow-gray-400 cursor-pointer hover:scale-110 ease-in duration-300 text-sky-600",
    href: "https://www.linkedin.com/in/thisisjagdeep/",
    label: "LinkedinIn",
  },
  
] as const;
