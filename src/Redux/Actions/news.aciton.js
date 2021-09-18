import axios from 'axios'


export const getPopularPosts = () => {
    return async (dispatch) => {
        try {
            dispatch({
                type: 'REQUEST_POSTS'    
            })
            const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
            console.log(res);
             dispatch({
                type: 'FETCHEDPOST',
                payload: res.data
            })
        } catch (error) {
            console.log(error);
        }
    }
}

export const deletePost = (title) => {
    return  (dispatch) => {
        console.log(title);
        dispatch({
            type: 'DELETE',
            payload: title
        })
    }
}