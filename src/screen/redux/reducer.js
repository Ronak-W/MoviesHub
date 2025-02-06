import { ADD_TO_WATCHLATER, ADD_USER, REMOVE_FROM_WATCHLATER } from "./actiontype";

const initialState = {
    user : null
};

export const reducer = (state = initialState, action) =>{
    switch(action.type){
        case ADD_USER:
            return {
                ...state,
                user: action.payload
            }
            default:
                return state;
    }
}

export const watchLaterInitialState = [];

export const watchLaterReducer = (state = watchLaterInitialState, action) =>{
    switch(action.type){
        case ADD_TO_WATCHLATER:
            return [
                ...state,
                action.payload
            ]
        case REMOVE_FROM_WATCHLATER:
            return state.filter((movie) => movie.id !== action.payload.id);
            
        default :
            return watchLaterInitialState
    }
}