export const initialState = {
    houses:['Gryffindor', 'Slytherin', 'Ravenclaw', 'Hufflepuff'],
    selectedHouse: '',
}

const SET_HOUSE = 'Set house'

export const setHouse = (house) => ({
    type: SET_HOUSE,
    payload: {house},
})

const housesReducer = (state=initialState, action) => {
    switch (action.type) {
        case SET_HOUSE:
            return {
                ...state,
                selectedHouse: action.payload.house
            }
        default:
            return state
    }
}

export default housesReducer;