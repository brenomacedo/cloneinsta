import { SET_POSTS, ADD_COMMENT, CREATING_POST, POST_CREATED } from '../actionTypes'
import axios from 'axios'

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
        }).catch(err => console.log(err))
        .then(resp => {
            post.image = resp.data.imageUrl
            axios.post('/posts.json', {
                ...post
            }).then(res => {
                dispatch(fetchPosts())
                dispatch(postCreated())
            }).catch(errr => console.log('deu erro'))
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

export const setPosts = posts => {
    return {
        type: SET_POSTS,
        payload: posts
    }
}

export const fetchPosts = () => {
    return dispatch => {
        axios.get('/posts.json')
            .catch(err => console.log(err))
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