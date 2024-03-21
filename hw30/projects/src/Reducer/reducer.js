export const initialState = {
    projects:[],
    searchValue: '',
}

const LOAD_PROJECT = '[PROJECTS] Load Project'
const ADD_PROJECT = '[PROJECTS] Add Project';
const DELETE_PROJECT = '[PROJECTS] Delete Project'
const SEARCH_BY_NAME = '[PROJECTS] Search By Name'
const UPDATE_SEARCH_VALUE = 'UPDATE_SEARCH_VALUE'

export const loadProject = (projects) => ({
    type: LOAD_PROJECT,
    payload: { projects },
});

export const deleteProject = (cardId) => ({
    type: DELETE_PROJECT,
    payload: { cardId },
});

export const addProject = (card) => ({
    type: ADD_PROJECT,
    payload: { card }
})

export const searchByName = (searchQuery) => ({
    type: SEARCH_BY_NAME,
    payload: { searchQuery },
});

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_PROJECT:
            return {
                ...state,
                projects: [...action.payload.projects],
            }
        case ADD_PROJECT:
            return{
                ...state,
                projects: [...state.projects, action.payload.card],
            };
        case DELETE_PROJECT:
            return {
                ...state,
                projects: state.projects.filter(
                    (card) => card.id !== action.payload.cardId
                ),
            }
        case SEARCH_BY_NAME:
            console.log(action)
            return {
                ...state,
                searchValue: action.payload.searchQuery,
                projects: state.projects.filter((card) =>
                    card.name.toLowerCase().includes(action.payload.searchQuery)
                )
            };

        default:
            return state
    }
}


