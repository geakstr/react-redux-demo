import {handleActions} from "redux-actions";

import {
  TOGGLE_HIRE,
  FILTER_USERS,

  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE
} from "../constants";

// Store all users in 'users' and filtered in 'filtered'
const initialState = {
  users: {},
  filtered: {},
  loading: false,
  error: null
};

const cardsReducer = handleActions({
  [FETCH_USERS_REQUEST]: (state, action) => ({...state, loading: true, error: null}),
  [FETCH_USERS_FAILURE]: (state, action) => ({...state, loading: false, error: action.payload}),
  [FETCH_USERS_SUCCESS]: (state, action) => {
    const users = action.payload;

    return {
      users,
      filtered: {...users},
      loading: false,
      error: null
    }
  },
  [TOGGLE_HIRE]: (state, action) => {
    const id = action.payload;

    const user = {...state.users[id]};
    user.hired = !user.hired;

    return {
      ...state,
      users: {
        ...state.users,
        [id]: user
      },
      filtered: {
        ...state.filtered,
        [id]: user
      }
    };
  },
  [FILTER_USERS]: (state, action) => {
    const filters = action.payload;
    if (!filters.length) {
      return {...state, filtered: {...state.users}};
    }

    const filtered = {};
    const fields = ["spec", "func", "type"];

    // Loop over all users in state
    for (let userId in state.users) {
      if (!state.users.hasOwnProperty(userId)) continue;

      const user = state.users[userId];

      // Effectively filter users by fields
      // Loop over filters
      filters: for (let filterIdx = 0, filtersLen = filters.length; filterIdx < filtersLen; filterIdx++) {
        // Loop over fields
        for (let fieldIdx = 0, fieldsLen = fields.length; fieldIdx < fieldsLen; fieldIdx++) {
          // Filter contains in field value
          if (~user[fields[fieldIdx]].toLowerCase().indexOf(filters[filterIdx].toLowerCase())) {
            // Ok, profile found, break filters loop
            filtered[userId] = {...user};
            break filters;
          }
        }
      }
    }

    return {...state, filtered};
  }
}, initialState);

export default cardsReducer;
