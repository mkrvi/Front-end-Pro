export const initialState = {
    formData:{
        firstNames: '',
        lastNames: '',
        emails: '',
        passwords:'',
        passwordConfirmations:'',
        usernames:'',
    },
}

const UPDATE_DATA = 'UPDATE_DATA';

export const updateData = (data) => ({
    type: UPDATE_DATA,
    payload: { data }
})

export const formReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_DATA:
            return {
                ...state,
                formData: {
                    ...state.formData,
                    ...action.payload.data
                }
            }
        default:
            return state;
    }
}
export default formReducer
