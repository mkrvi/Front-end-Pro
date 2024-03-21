import React, {useContext} from "react"
import Card from "./Card";
import {AppContext} from "../../../Context/Context";
import {useEffect} from "react";
import {getProjects} from "../../../Server/api";
import {loadProject} from "../../../Reducer/reducer";

function CardList({viewType}) {
    const [{projects}, dispatch] = useContext(AppContext)

    useEffect(() => {
        getProjects().then((projects) => dispatch(loadProject(projects)));
    }, []);

    console.log(projects)
    return (
        <div className={`project-boxes ${viewType === 'grid' ? 'jsGridView' : 'jsListView'}`}>
            {projects.map((card) => (
                <Card card={card} key={card.id} />
            ))}
        </div>
    )

}
 export default CardList