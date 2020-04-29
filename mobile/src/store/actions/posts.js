import { ADD_POST, ADD_COMMENT } from '../actionTypes'
import axios from 'axios'

export const addPost = post => {

    return dispatch => {
        axios.post('https://cloneinstagram-afa2f.firebaseio.com/posts.json', {
            ...post
        }).then(res => console.log(res)).catch(err => console.log(err))
    }

    // return {
    //     type: ADD_POST,
    //     payload: post
    // }
}

export const addComment = comment => {
    return {
        type: ADD_COMMENT,
        payload: comment
    }
}