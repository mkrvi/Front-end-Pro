import React, {useContext} from "react"
import Card from "./Card";
import {AppContext} from "../../../Context/Context";

function CardList({viewType}) {
    const [{projects}, ] = useContext(AppContext)
    return (
        <div className={`project-boxes ${viewType === 'grid' ? 'jsGridView' : 'jsListView'}`}>
            {projects.map((card) => (
                <Card card={card} key={card.id} />
            ))}
        </div>
    )

}
 export default CardList