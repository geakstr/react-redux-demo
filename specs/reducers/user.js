import expect from "expect";

import reducer from "../../js/reducers/user";
import * as constants from "../../js/constants";

describe("reducers/profile", () => {
  const initialState = {
    user: {},
    loading: false,
    error: null
  };

  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it("should handle FETCH_USER_REQUEST action", () => {
    expect(reducer(undefined, {
      type: constants.FETCH_USER_REQUEST,
      payload: undefined
    })).toEqual({...initialState, loading: true});
  });

  it("should handle FETCH_USER_FAILURE action", () => {
    expect(reducer(undefined, {
      type: constants.FETCH_USER_FAILURE,
      payload: "Error"
    })).toEqual({...initialState, error: "Error"});
  });

  it("should handle FETCH_USER_SUCCESS action", () => {
    const user = {
      id: "1",
      email: "mail@mail"
    };

    expect(reducer(undefined, {
      type: constants.FETCH_USER_SUCCESS,
      payload: user
    })).toEqual({...initialState, user});
  });

  it("should handle TOGGLE_HIRE action", () => {
    const state = {
      ...initialState,
      user: {
        id: "1",
        hired: false
      }
    };

    expect(reducer(state, {
      type: constants.TOGGLE_HIRE,
      payload: undefined
    })).toEqual({
      ...initialState,
      user: {
        id: "1",
        hired: true
      }
    });
  });
  
});
