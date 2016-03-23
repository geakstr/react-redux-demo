import {createAction} from "redux-actions";

import {
  ADD_FILTERS,
  DELETE_FILTER,
  FILTER_USERS
} from "../constants";

const addFiltersAction = createAction(ADD_FILTERS);
const deleteFilterAction = createAction(DELETE_FILTER);
const filterUsersAction = createAction(FILTER_USERS);

/**
 * Add filter and refilter users list
 *
 * @param filter
 * @returns {function()}
 */
export function addFilter(filter) {
  return (dispatch, getState) => {
    const filters = filter.split(",").map((x) => x.trim());

    dispatch(addFiltersAction(filters));
    dispatch(filterUsersAction(getState().filters));
  };
}


/**
 * Delete filter and refilter users list
 * @param filter
 * @returns {function()}
 */
export function deleteFilter(filter) {
  return (dispatch, getState) => {
    dispatch(deleteFilterAction(filter.trim()));
    dispatch(filterUsersAction(getState().filters));
  }
}