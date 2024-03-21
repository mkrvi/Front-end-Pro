import React from "react";
import Sidebar from "./Sidebar/Sidebar";
import Projects from "./Projects/Projects";
import Messages from "./Messages/Messages";
import { Outlet } from "react-router-dom";

function Content() {
    return (
        <div className='app-content'>
            <Sidebar/>
            <Outlet/>
            <Messages/>
        </div>
    )
}
export default Content
