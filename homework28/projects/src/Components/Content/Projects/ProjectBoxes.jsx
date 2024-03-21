import React from "react";
import {getRandomColor} from "../../../utils/utils";

export const cardInfo = [
    {
        id: 1,
        date: 'December 10, 2020',
        name: 'Web Designing',
        subName: 'Prototyping',
        progress: 'Progress',
        progressInPercents: '60%',
        participates: [`https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80`,
        `https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fG1hbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60`],
        daysLeft: '2 Days Left'
    },
    {
        id: 2,
        date: 'December 10, 2020',
        name: 'Testing',
        subName: 'Prototyping',
        progress: 'Progress',
        progressInPercents: '50%',
        participates: [`https://images.unsplash.com/photo-1596815064285-45ed8a9c0463?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1215&q=80`,
        `https://images.unsplash.com/photo-1583195764036-6dc248ac07d9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2555&q=80`],
        daysLeft: '2 Days Left'
    },
    {
        id: 3,
        date: 'December 10, 2020',
        name: 'Svg Animations',
        subName: 'Prototyping',
        progress: 'Progress',
        progressInPercents: '80%',
        participates: [`https://images.unsplash.com/photo-1587628604439-3b9a0aa7a163?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjR8fHdvbWFufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60`,
            `https://images.unsplash.com/photo-1596815064285-45ed8a9c0463?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1215&q=80`],
        daysLeft: '2 Days Left'
    },
    {
        id: 4,
        date: 'December 10, 2020',
        name: 'UI Development',
        subName: 'Prototyping',
        progress: 'Progress',
        progressInPercents: '20%',
        participates: [`https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80`,
        `https://images.unsplash.com/photo-1587628604439-3b9a0aa7a163?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjR8fHdvbWFufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60`],
        daysLeft: '2 Days Left'
    },
    {
        id: 5,
        date: 'December 10, 2020',
        name: 'Data Analysis',
        subName: 'Prototyping',
        progress: 'Progress',
        progressInPercents: '60%',
        participates: [`https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=2550&amp;q=80`,
         `https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fG1hbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60`],
        daysLeft: '2 Days Left'
    },
    {
        id: 6,
        date: 'December 10, 2020',
        name: 'Web Designing',
        subName: 'Prototyping',
        progress: 'Progress',
        progressInPercents: '40%',
        participates: [`https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80`,
         `https://images.unsplash.com/photo-1583195764036-6dc248ac07d9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2555&q=80`],
        daysLeft: '2 Days Left'
    },
]

const ProjectBoxes = () => {
    return (
        <div className="project-boxes jsGridView">
            {
                cardInfo.map((card) =>
                    <div className="project-box-wrapper">
                        <div className="project-box" style={{backgroundColor: getRandomColor()}}>
                            <div className="project-box-header">
                                <span>{card.date}</span>
                                <div className="more-wrapper">
                                    <button className="project-btn-more">
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                             width="24"
                                             height="24"
                                             viewBox="0 0 24 24"
                                             fill="none"
                                             stroke="currentColor"
                                             strokeWidth="2"
                                             strokeLinecap="round"
                                             strokeLinejoin="round"
                                            className="feather feather-more-vertical"
                                        >
                                            <circle cx="12" cy="12" r="1"/>
                                            <circle cx="12" cy="5" r="1"/>
                                            <circle cx="12" cy="19" r="1"/>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div className="project-box-content-header">
                                <p className="box-content-header">{card.name}</p>
                                <p className="box-content-subheader">{card.subName}</p>
                            </div>
                            <div className="box-progress-wrapper">
                                <p className="box-progress-header">{card.progress}</p>
                                <div className="box-progress-bar">
                    <span
                        className="box-progress"
                        style= {{width: card.progressInPercents, backgroundColor: getRandomColor()}}
                    ></span>
                                </div>
                                <p className="box-progress-percentage">{card.progressInPercents}</p>
                            </div>
                            <div className="project-box-footer">
                                <div className="participants">
                                    <img
                                        src= {card.participates[0]}
                                        alt="participant"
                                    />
                                    <img
                                        src={card.participates[1]}
                                        alt="participant"
                                    />
                                    <button className="add-participant">
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                             width="12"
                                             height="12"
                                             viewBox="0 0 24 24"
                                             fill="none"
                                             stroke="currentColor"
                                             strokeWidth="3"
                                             strokeLinecap="round"
                                             strokeLinejoin="round"
                                            className="feather feather-plus"
                                        >
                                            <path d="M12 5v14M5 12h14"/>
                                        </svg>
                                    </button>
                                </div>
                                <div className="days-left">{card.daysLeft}</div>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default ProjectBoxes