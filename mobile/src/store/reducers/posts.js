import { ADD_POST, ADD_COMMENT } from '../actionTypes'
const INITIAL_STATE = {
    posts: [{
        id: Math.random(),
        nickname: 'Rafale Pereira Filho',
        email: 'rafa@gmail.com',
        image: require('../../../assets/imgs/fence.jpg'),
        comments: [{
            nickname: 'John Rayman',
            comment: 'Massa!'
        }, {
            nickname: 'Ana Julia',
            comment: 'Incrivel!'
        }]
    }, {
        id: Math.random(),
        nickname: 'Francisco Leandro Lima',
        email: 'filima@gmail.com',
        image: require('../../../assets/imgs/bw.jpg'),
        comments: []
    }]
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: state.posts.concat({
                    ...action.payload
                })
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