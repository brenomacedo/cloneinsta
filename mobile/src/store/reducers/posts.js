import { ADD_POST } from '../actionTypes'
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
        default:
            return state
    }
}