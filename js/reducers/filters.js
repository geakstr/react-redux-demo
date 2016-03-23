import {handleActions} from "redux-actions";

import {
  ADD_FILTERS,
  DELETE_FILTER
} from "../constants";

const initialState = [];

const filtersReducer = handleActions({
  [ADD_FILTERS]: (state, action) => {
    const filters = action.payload;

    const newState = [...state];
    filters.forEach((filter) => {
      if (filter.length && newState.indexOf(filter) === -1) {
        newState.push(filter);
      }
    });
    return newState;
  },
  [DELETE_FILTER]: (state, action) => {
    const filter = action.payload;

    const i = state.indexOf(filter);
    if (i === -1) return state;

    return state.slice(0, i).concat(state.slice(i + 1));
  }
}, initialState);

export default filtersReducer;
