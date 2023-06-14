import React, { useState } from "react";
import {Link} from "react-router-dom";
import "./navbar.css"
import logo from "../../img/logo.png"
import { BsInstagram } from "react-icons/bs";
import * as FaIcons from "react-icons/fa";
import { ImCross } from "react-icons/im";
import * as AiIcons from "react-icons/ai";
import { IconContext } from "react-icons";
import { SidebarData } from "./SidebarData";

const Navbar = () => {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);
  
    return (
      <>
        <IconContext.Provider value={{ color: "undefined" }}>
          <div className="navbar">
            <Link to="#" className="menu-bars">
              <FaIcons.FaBars onClick={showSidebar} />
            </Link>
          </div>
          <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          
          <Link to='/'><img className="logo" src={logo}></img></Link>

            <ul className="nav-menu-items" onClick={showSidebar}>
              <li className="navbar-toggle">
                <Link to="#" className="menu-bars">
                  <AiIcons.AiOutlineClose />
                </Link>
              </li>
            <Link to='/'><img className="logo-active" src={logo}></img></Link>

              {SidebarData.map((item, index) => {
                return (
                  <li key={index} className={item.cName}>
                    <Link to={item.path}>
                      {item.icon}
                      <span>{item.title}</span>
                    </Link>
                  </li>
                );
              })}
                <li className="instaImg" onClick={() => window.open("https://www.instagram.com/twelve.photographyy/", "_blank") }><a>< BsInstagram /></a></li>

            </ul>
          </nav>
        </IconContext.Provider>
      </>
    );
}

export default Navbar; 