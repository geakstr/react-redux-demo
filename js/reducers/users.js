import { handleActions } from "redux-actions";

import users from "./users.json";

import {
  TOGGLE_HIRE
} from "../constants";

const initialState = users.slice(0).map((user) => {
  user.online = Math.random() >= 0.5;
  return user;
});

const usersReducer = handleActions({
  [TOGGLE_HIRE]: (state, action) => {
    const id = action.payload;
    const user = state.filter((user) => user.id === id).shift();

    user.hired = !user.hired;

    return state;
  }
}, initialState);

export default usersReducer;
