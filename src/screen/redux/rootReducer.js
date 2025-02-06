import { combineReducers } from "redux";
import { reducer } from "./reducer";
import { watchLaterReducer } from "./reducer";

export default combineReducers({
    reducer,
    watchLaterReducer
})