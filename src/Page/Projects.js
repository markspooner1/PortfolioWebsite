import ProjectItem from "../components/ProjectItem";
import "../styles/Project.css"
import proj1 from "../assets/RMC.png"
import proj2 from "../assets/logo.png"
import proj3 from "../assets/database.png"
const Projects = () => {
    return ( <div className="projects">
        <h1>Projects</h1>
        <div className="projectList">
            <ProjectItem name ="Rate My Courses" image = {proj1} url = "https://github.com/markspooner1/Rate-My-Courses-MERN-App"/>
            <ProjectItem name ="Warzone game" image = {proj2} url = "https://github.com/markspooner1/Warzone-Risk-Project"/>
            <ProjectItem name = "COVID Database management system" image = {proj3} url = "https://github.com/markspooner1/Covid-Database-Management-website"/>
        </div>
       
    </div> );
}
 
export default Projects;