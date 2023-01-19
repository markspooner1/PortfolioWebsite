const ProjectItem = ({image, name, url}) => {
    return (
    <a href={url}>
    <div className="projectItem" onClick="location.href=href = 'https://github.com/markspooner1/Warzone-Risk-Project'">
      <div style={{ backgroundImage: `url(${image})` }} className="bgImage" />
        <h1>{name}</h1>
    </div>  
    </a>
    )
    ;
}
 
export default ProjectItem;