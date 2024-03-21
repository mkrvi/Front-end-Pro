import React from "react"
import Card from "./Card";
import {cardInfo} from "../../../data/cardInfo";

function CardList({viewType}) {
    return (
        <div className={`project-boxes ${viewType === 'grid' ? 'jsGridView' : 'jsListView'}`}>
            {cardInfo.map((card) => (
                <Card card={card} key={card.id} />
            ))}
        </div>
    )

}
 export default CardList