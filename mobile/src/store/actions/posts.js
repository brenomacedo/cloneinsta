import { ADD_POST, ADD_COMMENT } from '../actionTypes'
import axios from 'axios'

export const addPost = post => {

    return dispatch => {

        // https://us-central1-cloneinstagram-afa2f.cloudfunctions.net/uploadImage

        axios({
            url: 'uploadImage',
            baseURL: 'https://us-central1-cloneinstagram-afa2f.cloudfunctions.net/',
            method: 'POST',
            data: {
                image: post.image.base64
            }
        }).catch(err => console.log(err))
        .then(resp => {

            console.log(resp.data)
            axios.post('/posts.json', {
                ...post
            }).then(res => console.log(res)).catch(errr => console.log('deu erro'))
        })
        
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