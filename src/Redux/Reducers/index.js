import {combineReducers} from 'redux'
import {postReducer} from './news.reducer'
import {showFrame} from './showFrame.reducer'
export const rootReducer = combineReducers({
    postReducer,showFrame
})