import {setCharacters} from "./charactersReducer";

const getCharactersAsync = (dispatch) => {
    fetch('https://hp-api.onrender.com/api/characters')
        .then((res) => res.json())
        .then((charactersData) => {
            dispatch(setCharacters(charactersData));
        })
        .catch((err) => {
            console.error(err);
        });
};
export default getCharactersAsync