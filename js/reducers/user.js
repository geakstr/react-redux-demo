import { handleActions } from "redux-actions";

import {
  FETCH_USER,
  TOGGLE_HIRE
} from "../constants";

const initialState = {};

const userReducer = handleActions({
  [FETCH_USER]: (state, action) => action.payload,
  [TOGGLE_HIRE]: (state, action) => {
    const id = action.payload;

    const user = {...state};

    user.hired = !user.hired;

    return user;
  }
}, initialState);

export default userReducer;
