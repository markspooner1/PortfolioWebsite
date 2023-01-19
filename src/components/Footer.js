import React from "react";
import { LinkedIn } from "@mui/icons-material";
import { GitHub } from "@mui/icons-material";
import "../styles/Footer.css"
const Footer = () => {
    return (
    <div className="footer">
        <div >
            <LinkedIn className = "icon" onClick={() => window.open('https://www.linkedin.com/in/mark-spooner-86a543148/', '_blank')}/>
            <GitHub className = "icon" onClick={() => window.open('https://github.com/markspooner1', '_blank')}/>
        </div>
    </div> );
}
 
export default Footer;