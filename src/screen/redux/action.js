import { ADD_USER } from "./actiontype";
import { ADD_TO_WATCHLATER } from "./actiontype";
import { REMOVE_FROM_WATCHLATER } from "./actiontype";

export function addUser(user){
    return{
        type : ADD_USER ,
        payload : user
    }
}

export function addToWatchLater(movie){
    return {
        type : ADD_TO_WATCHLATER,
        payload : movie
    }
}

export function removeFromWatchLater(movie) {
    return {
      type: REMOVE_FROM_WATCHLATER,
      payload: movie,
    };
  }