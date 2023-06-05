import React from "react";
import {Link} from "react-router-dom";
import "./navbar.css"
import logo from "../../img/logo.png"
import { BsInstagram } from "react-icons/bs";

const onClick = () => {
    window.open("https://www.instagram.com/twelve.photographyy/", "_blank") 
    
  }

const Navbar = () => {
    return(
        <nav className="navbar">
            <div className="container">
            <Link to='/'><img className="logo" src={logo}></img></Link>
            <ul className="nav-links">                
                <Link to='/Portfolio'><li>Portfolio</li></Link>
                <Link to='/Contact'><li>Contact</li></Link>
                <Link to='/About'><li>About</li></Link>
                <li className="instaImg" onClick={onClick}>< BsInstagram /></li>
            </ul>
            </div>
        </nav>
    )
}

export default Navbar; 