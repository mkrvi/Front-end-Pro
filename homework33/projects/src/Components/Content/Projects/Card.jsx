import React, {useContext} from "react";
import {getRandomColor} from "../../../utils/getRandomColor";
import {AppContext} from "../../../Context/Context";
import {deleteProject} from "../../../Reducer/reducer";
import {getDaysLeft} from "../../../utils/getDaysLeft";


function Card({card}) {
    const [, dispatch] = useContext(AppContext)
    function handleDelete() {
        dispatch(deleteProject(card.id))
    }
    return(
        <div key={card.id} className="project-box-wrapper">
            <div className="project-box" style={{backgroundColor: getRandomColor()}}>
                <div className="project-box-header">
                    <span>{card.date}</span>
                    <div className="more-wrapper">
                        <button onClick={handleDelete} className="project-btn-more">
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
                        style={{width: card.progressInPercents, backgroundColor: getRandomColor()}}
                    ></span>
                    </div>
                    <p className="box-progress-percentage">{card.progressInPercents}</p>
                </div>
                <div className="project-box-footer">
                    <div className="participants">
                        {card.participates.map((participant,index) => (
                            <img
                                key={index}
                                src={participant}
                                alt="participant"
                            />
                        ))}
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
                    <div className="days-left">{getDaysLeft(card.deadline)} {card.daysLeft}</div>
                </div>
            </div>
        </div>
    )
}

export default Card