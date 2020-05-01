import { USER_LOGGED_OUT, USER_LOGGED_IN, USER_LOADED, LOADING_USER } from '../actionTypes'
const INITIAL_STATE = {
    name: null,
    email: null,
    isLoading: false
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case USER_LOGGED_IN:
            return {
                ...state,
                name: action.payload.name,
                email: action.payload.email
            }
        case USER_LOGGED_OUT:
            return {
                ...state,
                name: null,
                email: null
            }
        case LOADING_USER:
            return {
                ...state,
                isLoading: true
            }
        case USER_LOADED:
            return {
                ...state,
                isLoading: false
            }
        default:
            return {
                ...state
            }
    }
}