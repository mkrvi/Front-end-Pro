import React, {useState} from "react";
import ProjectsHeader from "./ProjectsHeader";
import ProjectsLine from "./ProjectsLine";
import CardList from "./CardList";

function Projects() {
    const [viewType, setViewType] = useState('grid');
    const handleGridViewClick = () => setViewType('grid');
    const handleListViewClick = () => setViewType('list');
    return (
        <div className = 'projects-section'>
            <ProjectsHeader/>
            <ProjectsLine viewType={viewType}
            handleListViewClick={handleListViewClick}
            handleGridViewClick={handleGridViewClick}/>
            <CardList viewType={viewType}/>
        </div>
    )
}

export default Projects