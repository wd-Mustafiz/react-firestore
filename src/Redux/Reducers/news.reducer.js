const initialState = {
    loading: false,
    posts: []

    
}

export const postReducer = (state=initialState , action) => {
    switch(action.type) {
        case 'REQUEST_POSTS': 
            return {...state , loading: true}
        case 'FETCHEDPOST':
            return {...state , loading:false , posts:action.payload }
        case 'DELETE':
            const newPosts = state.posts.filter(p => p.title !== action.payload)
            return {...state , posts:newPosts}
        default: return state
    }
}