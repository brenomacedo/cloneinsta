import { SET_MESSAGE } from '../actionTypes'

const INITIAL_STATE = {
    title: '',
    text: ''
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case SET_MESSAGE:
            return {
                ...state,
                title: action.payload.title,
                text: action.payload.text
            }
        default:
            return state
    }
}