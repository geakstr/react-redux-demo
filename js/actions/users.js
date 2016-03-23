import {createAction} from "redux-actions";
import axios from "axios";

import {
  TOGGLE_HIRE,
  CLEAR_FILTERS,

  FETCH_USERS,
  FETCH_USER,

  FETCH_USERS_REQUEST,
  FETCH_USERS_FAILURE,

  FETCH_USER_REQUEST,
  FETCH_USER_FAILURE,

  API_URL
} from "../constants";


// Cache users into this after first fetch for some API emulation in future
let users;


const fetchUsersRequestAction = createAction(FETCH_USERS_REQUEST);
const fetchUsersFailureAction = createAction(FETCH_USERS_FAILURE);

const fetchUserRequestAction = createAction(FETCH_USER_REQUEST);
const fetchUserFailureAction = createAction(FETCH_USER_FAILURE);

const toggleHireAction = createAction(TOGGLE_HIRE);

const fetchUsersAction = createAction(FETCH_USERS);
const fetchUserAction = createAction(FETCH_USER);

const clearFiltersAction = createAction(CLEAR_FILTERS);


export function toggleHire(userId) {
  return (dispatch, getState) => {
    dispatch(toggleHireAction(userId));

    // Next lines only for API emulation
    let user = users.filter((user) => user.id === userId).shift();
    user.hired = !user.hired;
  };
}

export function fetchUsers(url) {
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
        state[user.id] = user;
      });

      dispatch(fetchUsersAction(state));
    } catch (err) {
      console.error(err);

      dispatch(fetchUsersFailureAction("Users fetching failed"));
    }
  };
}

export function fetchUser(url, userId) {
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
        state[user.id] = user;
      });

      dispatch(fetchUserAction(state[userId]));
    } catch (err) {
      console.error(err);

      dispatch(fetchUserFailureAction("User fetching failed"));
    }
  };
}

function sleep(ms = 0) {
  return new Promise(r => setTimeout(r, ms));
}

async function fetchAllUsers() {
  const response = await axios.get(API_URL);
  const users = response.data;

  users.forEach((user) => {
    user.online = Math.random() >= 0.5;
  });

  return users;
}