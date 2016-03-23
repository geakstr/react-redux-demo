import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

import cards from "./cards";
import user from "./user";

export default combineReducers({
  user,
  users: cards,
  routing: routerReducer
});
