import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

import cards from "./cards";
import user from "./user";
import filters from "./filters";

export default combineReducers({
  user, filters,
  users: cards,
  routing: routerReducer
});
