import { commentReducer } from "./Comments/reducer";
import { postReducer } from "./Posts/reducer";
import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from 'redux-thunk';

const mainReducers = combineReducers({
   comment: commentReducer,
   post: postReducer
})

const store = createStore(mainReducers, applyMiddleware(thunk))

export {store}