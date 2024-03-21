export const initialState = {
    step:1,
    formData: {
        firstName: '',
        lastName: '',
        email: '',
        password:'',
        passwordConfirmation:'',
        image:`https://cdn.vox-cdn.com/thumbor/RLs14h8hTmPkPJKIKbojVN37g3g=/0x0:1905x799/1820x1213/filters:focal(585x159:889x463):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/67827964/image_2020_11_20_094752.0.png`
    },
}

const UPDATE_DATA = 'UPDATE_DATA';
const PREVIOUS_STEP ='PREVIOUS_STEP';
const NEXT_STEP ='NEXT_STEP';

export const updateData = (data) => ({
    type: UPDATE_DATA,
    payload: { data }
})
export const nextStep = () =>({
    type: NEXT_STEP,
})

export const previousStep = () =>({
    type: PREVIOUS_STEP,
})

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case NEXT_STEP:
            return {
                ...state,
            step: state.step++,
            };
        case PREVIOUS_STEP:
            return {
                ...state,
                step:state.step--,
            }
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