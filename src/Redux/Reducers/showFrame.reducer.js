const initialState = false;

export const showFrame = (state = initialState , action) => {
    switch (action.type) {
        case 'DO' : return state = !state
        default: return state

    }
}