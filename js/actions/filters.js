import {createAction} from "redux-actions";

import {
  ADD_FILTERS,
  DELETE_FILTER,
  FILTER_USERS
} from "../constants";

const addFiltersAction = createAction(ADD_FILTERS);
const filterUsersAction = createAction(FILTER_USERS);
export function addFilter(filter) {
  return (dispatch, getState) => {
    const filters = filter.split(",").map((x) => x.trim());

    dispatch(addFiltersAction(filters));
    dispatch(filterUsersAction(getState().filters));
  };
}

const deleteFilterAction = createAction(DELETE_FILTER);
export function deleteFilter(filter) {
  return (dispatch, getState) => {
    dispatch(deleteFilterAction(filter.trim()));
    dispatch(filterUsersAction(getState().filters));
  }
}