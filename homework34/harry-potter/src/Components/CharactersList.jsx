import {useEffect, useMemo} from "react";
import {useDispatch, useSelector} from "react-redux";

import getCharactersAsync from "../reducers/getCharactersAsync";

function CharactersList() {
    const dispatch = useDispatch()
    const {characters} = useSelector(state => state.charactersReducer)
    const {searchValue} = useSelector(state=> state.searchValue)
    const {selectedHouse} = useSelector(state=> state.houses)

    useEffect(() => {
        getCharactersAsync(dispatch)
    }, [dispatch]);

    const filteredCharacters = useMemo(() => {
        const filteredByHouse = selectedHouse
            ? characters.filter((character) => character.house === selectedHouse)
            : characters;
        return filteredByHouse.filter((character) =>
            character.name.toLowerCase().includes(searchValue.toLowerCase())
        );
    }, [characters, searchValue, selectedHouse]);

    return(
        <ul id="charactersList">
            {filteredCharacters.map((item, i) => (
                <li className="character" key={i}>
                    <h2>{item.name}</h2>
                    <p>House: {item.house}</p>
                    <img src={item.image ? item.image : 'empty.png'} alt={item.name}></img>
                </li>
            ))}
        </ul>
    )
}

export default CharactersList