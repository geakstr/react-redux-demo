import {handleActions} from "redux-actions";

import {
  TOGGLE_HIRE,

  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE
} from "../constants";

const initialState = {
  user: {},
  loading: false,
  error: null
};

const userReducer = handleActions({
  [FETCH_USER_REQUEST]: (state, action) => ({...state, loading: true, error: null}),
  [FETCH_USER_FAILURE]: (state, action) => ({...state, loading: false, error: action.payload}),
  [FETCH_USER_SUCCESS]: (state, action) => {
    const user = action.payload;

    return {
      user,
      loading: false,
      error: null
    }
  },
  [TOGGLE_HIRE]: (state, action) => {
    const user = {...state.user};

    user.hired = !user.hired;

    return {...state, user};
  }
}, initialState);

export default userReducer;
