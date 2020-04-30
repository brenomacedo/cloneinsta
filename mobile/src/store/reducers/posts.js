import { SET_POSTS, ADD_COMMENT } from '../actionTypes'
const INITIAL_STATE = {
    posts: []
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case SET_POSTS:
            return {
                ...state,
                posts: action.payload
            }
        case ADD_COMMENT:
            return {
                ...state,
                posts: state.posts.map(post => {
                    if (post.id === action.payload.postId) {
                        if (post.comments) {
                            post.comments = post.comments.concat(action.payload.comment)
                        } else {
                            post.comments = [action.payload.comment]
                        }
                    }
                    return post
                })
            }
        default:
            return state
    }
}