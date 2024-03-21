import { createBrowserRouter, Navigate } from 'react-router-dom';
import Home from "../pages/Home";
import Statistic from "../pages/Statistic";
import Schedule from "../pages/Schedule";
import Settings from "../pages/Settings";
import ProjectsContainer from "../pages/ProjectsContainer";
import Login from "../pages/Login";

export const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <>
                <Home/>
                {/*/!*<Navigate to='home'/>*/}
            </>
        ),
        children: [
            {
                path: 'home',
                element: <ProjectsContainer />,
            },
            {
                path: 'statistic',
                element: <Statistic />,
            },
            {
                path: 'schedule',
                element: <Schedule />,
            },
            {
                path: 'settings',
                element: <Settings />,
            },
        ],
    },
    {
        path: "/login",
        element: <Login />
    },
]);

