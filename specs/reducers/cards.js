import expect from "expect";

import reducer from "../../js/reducers/cards";
import * as constants from "../../js/constants";

describe("reducers/cards", () => {
  const initialState = {
    users: {},
    filtered: {},
    loading: false,
    error: null
  };

  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it("should handle FETCH_USERS_REQUEST action", () => {
    expect(reducer(undefined, {
      type: constants.FETCH_USERS_REQUEST,
      payload: undefined
    })).toEqual({...initialState, loading: true});
  });

  it("should handle FETCH_USERS_FAILURE action", () => {
    expect(reducer(undefined, {
      type: constants.FETCH_USERS_FAILURE,
      payload: "Error"
    })).toEqual({...initialState, error: "Error"});
  });

  it("should handle FETCH_USERS_SUCCESS action", () => {
    const users = {
      "1": {
        id: "1",
        email: "mail@mail"
      }
    };

    expect(reducer(undefined, {
      type: constants.FETCH_USERS_SUCCESS,
      payload: users
    })).toEqual({...initialState, users, filtered: users});
  });

  it("should handle TOGGLE_HIRE action", () => {
    const state = {
      ...initialState,
      users: {
        "1": {
          hired: false
        }
      },
      filtered: {
        "1": {
          hired: false
        }
      }
    };

    expect(reducer(state, {
      type: constants.TOGGLE_HIRE,
      payload: "1"
    })).toEqual({
      ...initialState,
      users: {
        "1": {
          hired: true
        }
      },
      filtered: {
        "1": {
          hired: true
        }
      }
    });
  });

  it("should handle FILTER_USERS action", () => {
    const state = {
      ...initialState,
      users: {
        "1": {
          func: "Director",
          spec: "One",
          type: "Two"
        },
        "2": {
          func: "Programmer",
          spec: "One",
          type: "Two"
        }
      },
      filtered: {
        "1": {
          func: "Director",
          spec: "One",
          type: "Two"
        },
        "2": {
          func: "Programmer",
          spec: "One",
          type: "Two"
        }
      }
    };

    expect(reducer(state, {
      type: constants.FILTER_USERS,
      payload: ["Programmer"]
    })).toEqual({
      ...initialState,
      users: {
        "1": {
          func: "Director",
          spec: "One",
          type: "Two"
        },
        "2": {
          func: "Programmer",
          spec: "One",
          type: "Two"
        }
      },
      filtered: {
        "2": {
          func: "Programmer",
          spec: "One",
          type: "Two"
        }
      }
    });
  });
});
