import { LinkedIn, GitHub, Email } from "@mui/icons-material";
import React from "react";
import "../styles/Home.css";
const Home = () => {
  return (
    <div className="home">
      <div className="about">
        <h2>Hi, My name is Mark</h2>
        <div className="prompt">
          <p>
            I'm a highly motivated, recent CS graduate seeking new opportunities
          </p>
          <LinkedIn
            className="icon"
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/mark-spooner-86a543148/",
                "_blank"
              )
            }
          />
          <GitHub
            className="icon"
            onClick={() =>
              window.open("https://github.com/markspooner1", "_blank")
            }
          />
          <Email
            className="icon"
            onClick={() =>
              window.open(window.open("mailto:markaustinspooner@gmail.com"))
            }
          />
        </div>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <ol className="list">
          <li className="item">
            <h2>Languages</h2>
            <span>Java, C++, JavaScript, Python, SQL, PHP, HTML/CSS</span>
          </li>
          <li className="item">
            <h2>Technologies/Frameworks</h2>
            <span>React, Node.js, Express.js</span>
          </li>
          <li className="item">
            <h2>Developer Tools</h2>
            <span>Git/GitHub, VS Code, Eclipse, Android Studio</span>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Home;
