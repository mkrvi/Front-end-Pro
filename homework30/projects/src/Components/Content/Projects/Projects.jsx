import React, {useContext, useEffect, useState} from "react";
import ProjectsHeader from "./ProjectsHeader";
import ProjectsLine from "./ProjectsLine";
import CardList from "./CardList";
import {getProjects} from "../../../Server/api";
import {AppContext} from "../../../Context/Context";
import {loadProject} from "../../../Reducer/reducer";

function Projects() {
    const [, dispatch] = useContext(AppContext)

    useEffect(() => {
        getProjects().then((projects) => dispatch(loadProject(projects)));
    }, []);

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