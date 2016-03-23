import {createAction} from "redux-actions";
import axios from "axios";

import {
  TOGGLE_HIRE,
  CLEAR_FILTERS,

  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,

  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,

  API_URL
} from "../constants";


// Cache users into this after first fetch for some API emulation in future
let users;


const toggleHireAction = createAction(TOGGLE_HIRE);

const fetchUsersRequestAction = createAction(FETCH_USERS_REQUEST);
const fetchUsersSuccessAction = createAction(FETCH_USERS_SUCCESS);
const fetchUsersFailureAction = createAction(FETCH_USERS_FAILURE);

const fetchUserRequestAction = createAction(FETCH_USER_REQUEST);
const fetchUserSuccessAction = createAction(FETCH_USER_SUCCESS);
const fetchUserFailureAction = createAction(FETCH_USER_FAILURE);

const clearFiltersAction = createAction(CLEAR_FILTERS);


/**
 * Toggle profile hire status
 *
 * @param userId
 * @returns {function()}
 */
export function toggleHire(userId) {
  return (dispatch, getState) => {
    // Next condition only for API emulation
    if (users) {
      let user = users.filter((user) => user.id === userId).shift();
      user.hired = !user.hired;
    }

    return dispatch(toggleHireAction(userId));
  };
}

/**
 * Fetch users list from api
 *
 * @returns {Function}
 */
export function fetchUsers() {
  return async function (dispatch) {
    try {
      const state = {};

      dispatch(clearFiltersAction());

      // If first fetch
      if (!users) {
        dispatch(fetchUsersRequestAction());
        // Slow api emulation
        await sleep(1500);
        users = await fetchAllUsers();
      }

      // Candidates first, hired next
      const candidates = users.filter((user) => !user.hired);
      const hired = users.filter((user) => user.hired);
      const sortedUsers = candidates.concat(hired);

      sortedUsers.forEach((user) => {
        state[user.id] = {...user};
      });

      dispatch(fetchUsersSuccessAction(state));
    } catch (err) {
      console.error(err);

      dispatch(fetchUsersFailureAction("Users fetching failed"));
    }
  };
}

/**
 * Fetch profile by id from api
 *
 * @param userId
 * @returns {Function}
 */
export function fetchUser(userId) {
  return async function (dispatch) {
    try {
      const state = {};

      dispatch(clearFiltersAction());

      // If first fetch
      if (!users) {
        dispatch(fetchUserRequestAction());
        // Slow api emulation
        await sleep(1500);
        users = await fetchAllUsers();
      }

      users.forEach((user) => {
        state[user.id] = {...user};
      });

      dispatch(fetchUserSuccessAction(state[userId]));
    } catch (err) {
      console.error(err);

      dispatch(fetchUserFailureAction("User fetching failed"));
    }
  };
}

// Only for testing environment
export function clearCache() {
  users = undefined;
}

function sleep(ms = 0) {
  return new Promise(r => setTimeout(r, ms));
}

async function fetchAllUsers() {
  const response = await axios.get(API_URL);
  const users = response.data;

  users.forEach((user, i) => {
    user.online = (i % 2 === 0);
  });

  return users;
}