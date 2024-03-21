import React from "react";
import ProjectsHeader from "./ProjectsHeader";
import ProjectsLine from "./ProjectsLine";
import ProjectBoxes from "./ProjectBoxes";

const Projects = () => {
    return (
        <div className = 'projects-section'>
            <ProjectsHeader/>
            <ProjectsLine/>
            <ProjectBoxes/>
        </div>

    )
}

export default Projects