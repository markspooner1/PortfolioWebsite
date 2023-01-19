import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css"
const NavBar = () => {
    return (
    <div className="navbar">
        <div className = "links">
            <Link to = "/home">Home</Link>
            <Link to = "/experience">Education/Experience</Link>
            <Link to = "/projects">Projects</Link>
        </div>
    </div> );
}
 
export default NavBar;