import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
  {
    title: "Portfolio",
    path: "/Portfolio",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Contact",
    path: "/Contact",
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text",
  },
  {
    title: "About",
    path: "/About",
    icon: <FaIcons.FaCartPlus />,
    cName: "nav-text",
  },
  
];