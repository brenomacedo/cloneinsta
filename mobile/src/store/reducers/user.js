import { USER_LOGGED_OUT, USER_LOGGED_IN } from '../actionTypes'
const INITIAL_STATE = {
    name: null,
    email: null
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
        default:
            return {
                ...state
            }
    }
}