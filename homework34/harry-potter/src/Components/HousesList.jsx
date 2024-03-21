import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {setHouse} from "../reducers/housesReducer";

function HousesList() {
    const dispatch = useDispatch()
    const {houses} = useSelector(state => state.houses)
    const {selectedHouse} = useSelector(state=> state.houses)

    function handleSelectHouse(house) {
        dispatch(setHouse(house === selectedHouse ? '' : house))
    }

    return(
        <div className="hogwarts-houses">
            {houses.map((house, i) => (
                <div
                    className="house"
                    key={i}
                    onClick={() => handleSelectHouse(house)}
                >
                    <img src={`houses/${house}.png`} alt={house} />
                </div>
            ))}
        </div>
    )
}

export default HousesList