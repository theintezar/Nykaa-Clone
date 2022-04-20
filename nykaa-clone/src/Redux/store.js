import { commentReducer } from "./Comments/reducer";
import { postReducer } from "./Posts/reducer";
import {createStore, combineReducers} from "redux"

const mainReducers = combineReducers({
   comment: commentReducer,
   post: postReducer
})

const store = createStore(mainReducers)

export {store}