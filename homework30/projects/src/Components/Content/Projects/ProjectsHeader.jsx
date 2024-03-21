import React, {useEffect, useState} from "react";

function ProjectsHeader() {
    const [currentDate, setCurrentDate] = useState('')

    useEffect(() => {
        const options = { month: 'long', day: 'numeric' };
        const today = new Date().toLocaleDateString('en-US', options)
        setCurrentDate(today);
    }, []);

    return (
        <div className="projects-section-header">
            <p>Projects</p>
            <p className="time">{currentDate}</p>
        </div>
    )
}

export default ProjectsHeader