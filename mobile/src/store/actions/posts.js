import { SET_POSTS, ADD_COMMENT, CREATING_POST, POST_CREATED } from '../actionTypes'
import axios from 'axios'
import { setMessage } from './message'

export const addPost = post => {

    return dispatch => {
        dispatch(creatingPost())
        // https://us-central1-cloneinstagram-afa2f.cloudfunctions.net/uploadImage

        axios({
            url: 'uploadImage',
            baseURL: 'https://us-central1-cloneinstagram-afa2f.cloudfunctions.net/',
            method: 'POST',
            data: {
                image: post.image.base64
            }
        }).catch(err => dispatch(setMessage({
            title: 'Erro!',
            text: 'Ocorreu um erro inesperado!'
        })))
        .then(resp => {
            post.image = resp.data.imageUrl
            axios.post('/posts.json', {
                ...post
            }).then(res => {
                dispatch(fetchPosts())
                dispatch(postCreated())
            }).catch(errr => dispatch(setMessage({
                title: 'Erro!',
                text: errr
            })))
        })
        
    }

    // return {
    //     type: ADD_POST,
    //     payload: post
    // }
}

export const addComment = payload => {

    return dispatch => {
        axios.get(`/posts/${payload.postId}.json`)
            .catch(err => dispatch(setMessage({
                title: 'Erro!',
                text: errr
            })))
            .then(resp => {
                const comments = resp.data.comments || []
                comments.push(payload.comment)
                axios.patch(`/posts/${payload.postId}.json`, { comments })
                    .catch(err => dispatch(setMessage({
                        title: 'Erro!',
                        text: errr
                    })))
                    .then(res => {
                        dispatch(fetchPosts())
                    })
            })
    }

    // return {
    //     type: ADD_COMMENT,
    //     payload
    // }
}

export const setPosts = posts => {
    return {
        type: SET_POSTS,
        payload: posts
    }
}

export const fetchPosts = () => {
    return dispatch => {
        axios.get('/posts.json')
            .catch(err => dispatch(setMessage({
                title: 'Erro!',
                text: errr
            })))
            .then(resp => {
                const rawPosts = resp.data
                const posts = []
                for (let key in rawPosts) {
                    posts.push({
                        ...rawPosts[key],
                        id: key
                    })
                }

                dispatch(setPosts(posts.reverse()))
            })
    }
}

export const creatingPost = () => {
    return {
        type: CREATING_POST
    }
}

export const postCreated = () => {
    return {
        type: POST_CREATED
    }
}