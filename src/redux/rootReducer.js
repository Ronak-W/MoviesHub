import { combineReducers } from "redux";
import { userReducer } from "./reducer";
import { watchLaterReducer } from "./reducer";

export default combineReducers({
    user : userReducer,
    watchLater : watchLaterReducer
})