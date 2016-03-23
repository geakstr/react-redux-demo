import { handleActions } from "redux-actions";

import {
  TOGGLE_HIRE,
  FETCH_USERS
} from "../constants";

const initialState = {};

const cardsReducer = handleActions({
  [FETCH_USERS]: (state, action) => action.payload,
  [TOGGLE_HIRE]: (state, action) => {
    const id = action.payload;

    const user = {...state[id]};

    user.hired = !user.hired;

    return {
      ...state,
      [id]: user
    };
  }
}, initialState);

export default cardsReducer;
