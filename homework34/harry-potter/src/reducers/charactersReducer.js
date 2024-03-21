export const initialState = {
    characters: [],
}

const SET_CHARACTERS = 'Set characters'

export const setCharacters = (characters) => ({
    type: SET_CHARACTERS,
    payload: {characters},
})

const charactersReducer = (state=initialState, action) => {
    switch (action.type) {
        case SET_CHARACTERS:
            return {
                ...state,
                characters: action.payload.characters
            }
        default:
            return state
    }
}

export default charactersReducer;