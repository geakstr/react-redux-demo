import { createAction } from "redux-actions";
import axios from "axios";

import {
  TOGGLE_HIRE,
  FETCH_USERS,
  FETCH_USER
} from "../constants";

const API_URL = "https://raw.githubusercontent.com/geakstr/test-frontendy/master/js/reducers/users.json";

const toggleHireAction = createAction(TOGGLE_HIRE);
export function toggleHire(userId) {
  return (dispatch) => {
    dispatch(toggleHireAction(userId));

    // Next two lines only for API emulation
    const user = users.filter((user) => user.id === userId).shift();
    user.hired = !user.hired;
  };
}

const fetchUsersAction = createAction(FETCH_USERS);
export function fetchUsers(url) {
  return async function(dispatch) {
    const state = {};

    const response = await axios.get(API_URL);
    const users = JSON.parse(response.data);

    users.forEach((user) => {
      user.online = Math.random() >= 0.5;
      return user;
    });

    // Candidates first, hired next
    const candidates = users.filter((user) => !user.hired);
    const hired = users.filter((user) => user.hired);
    const sortedUsers = candidates.concat(hired);

    sortedUsers.forEach((user) => {
      state[user.id] = user;
    });

    dispatch(fetchUsersAction(state));
  };
}

const fetchUserAction = createAction(FETCH_USER);
export function fetchUser(url, userId) {
  return async function(dispatch) {
    const state = {};

    const response = await axios.get(API_URL);
    const users = JSON.parse(response.data);

    users.map((user) => {
      user.online = Math.random() >= 0.5;
      return user;
    }).forEach((user) => {
      state[user.id] = user;
    });

    dispatch(fetchUserAction(state[userId]));
  };
}