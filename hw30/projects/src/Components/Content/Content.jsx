import React from "react";
import Sidebar from "./Sidebar/Sidebar";
import Projects from "./Projects/Projects";
import Messages from "./Messages/Messages";

function Content() {
    return (
        <div className='app-content'>
            <Sidebar/>
            <Projects/>
            <Messages/>
        </div>
    )
}
export default Content
