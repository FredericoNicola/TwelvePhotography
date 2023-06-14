import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
  {
    title: "Portfolio",
    path: "/Portfolio",
    icon: <AiIcons.AiFillAccountBook />,
    cName: "nav-text",
  },
  {
    title: "Contact",
    path: "/Contact",
    icon: <IoIcons.IoLogoGameControllerA />,
    cName: "nav-text",
  },
  {
    title: "About",
    path: "/About",
    icon: <FaIcons.FaFileImage />,
    cName: "nav-text",
  },
  
];