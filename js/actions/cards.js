import { createAction } from "redux-actions";

import {
  TOGGLE_HIRE
} from "../constants";

const toggleHireAction = createAction(TOGGLE_HIRE);
export function toggleHire(userId) {
  return (dispatch) => {
    dispatch(toggleHireAction(userId));
  };
}