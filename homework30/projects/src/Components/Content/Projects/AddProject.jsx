import React, {useContext, useEffect, useState} from "react";
import {AppContext} from "../../../Context/Context";
import {addProject} from "../../../Reducer/reducer";
import { v4 as uuidv4 } from "uuid";

function AddProject() {
    const [, dispatch] = useContext(AppContext);
    const [newProject, setNewProject] = useState('');
    const [deadline, setDeadline] = useState('');
    const [startDate, setStartDate] = useState('');

    useEffect(() => {
        const today = new Date().toISOString().slice(0, 10);
        setStartDate(today);
    }, []);

    function handleDeadlineChange(event) {
        const selectedDate = event.target.value;
        setDeadline(selectedDate);
    }

    const onSubmit = function (event) {
        event.preventDefault();
        const card = {
            id: uuidv4(),
            name: newProject,
            date: "December 10, 2020",
            daysLeft: "Days Left",
            participates:[],
            progress: "Progress",
            progressInPercents: "0%",
            subName: "Prototyping",
            deadline: new Date(deadline)
        };
        dispatch(addProject(card));
        setNewProject('');
    }

    return (
        <div className='add-project'>
            <h3 className="app-name">Add new project</h3>
            <form onSubmit={onSubmit} className="new-project">
                <label htmlFor="title">Project title</label>
                <div className="search-wrapper new-project">
                    <input onChange={(event) => setNewProject(event.target.value)}

                           id="title"
                        className="search-input"
                        type="text"
                        placeholder="Enter title"
                    />
                </div>
                <label htmlFor="startDate">Start date</label>
                <div className="search-wrapper new-project">
                    <input id="startDate" className="search-input" type="date" readOnly value={startDate} />
                </div>

                <label htmlFor="deadline">Deadline</label>
                <div className="search-wrapper new-project">
                    <input value={deadline} onChange={handleDeadlineChange} id="deadline" className="search-input" type="date" />
                </div>

                <button className="create-project">Create Project</button>
            </form>
        </div>
    );
}

export default AddProject;
