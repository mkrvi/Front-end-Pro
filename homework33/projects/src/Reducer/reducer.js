export const initialState = {
    projects:[],
    formData: {
        username: '',
        password: '',
    }
}

const LOAD_PROJECT = '[PROJECTS] Load Project'
const ADD_PROJECT = '[PROJECTS] Add Project';
const DELETE_PROJECT = '[PROJECTS] Delete Project'
const SEARCH_BY_NAME = '[PROJECTS] Search By Name'
const UPDATE_DATA = 'UPDATE_DATA';

export const updateData = (data) => ({
    type: UPDATE_DATA,
    payload: { data }
})

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
        case UPDATE_DATA:
            return {
                ...state,
                formData: {
                    ...state.formData,
                    ...action.payload.data
                }
            }

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
                projects: state.projects.filter((card) =>
                    card.name.toLowerCase().includes(action.payload.searchQuery)
                )
            };

        default:
            return state
    }
}


