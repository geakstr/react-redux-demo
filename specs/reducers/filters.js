import expect from "expect";

import reducer from "../../js/reducers/filters";
import * as constants from "../../js/constants";

describe("reducers/filters", () => {
  const initialState = [];

  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it("should handle ADD_FILTERS action", () => {
    expect(reducer(undefined, {
      type: constants.ADD_FILTERS,
      payload: ["One", "Two"]
    })).toEqual(["One", "Two"]);
  });

  it("should handle DELETE_FILTER action", () => {
    expect(reducer(["One", "Two", "Three"], {
      type: constants.DELETE_FILTER,
      payload: "Two"
    })).toEqual(["One", "Three"]);
  });
});
