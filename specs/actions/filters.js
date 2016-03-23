import expect from "expect";
import {createAction} from "redux-actions";
import mockStore from "../helpers/mock-store";

import * as constants from "../../js/constants";
import * as actions from "../../js/actions/filters";

describe("actions/filters", () => {
  it("should dispatch ADD_FILTERS and FILTER_USERS actions", () => {
    const store = mockStore({});

    const filterName = "TestFilter";
    store.dispatch(actions.addFilter(filterName));

    const producedActions = store.getActions();
    const addFiltersAction = createAction(constants.ADD_FILTERS);
    const filterUsersAction = createAction(constants.FILTER_USERS);

    expect(producedActions).toEqual([addFiltersAction([filterName]), filterUsersAction()]);
  });

  it("should dispatch DELETE_FILTER and FILTER_USERS actions", () => {
    const store = mockStore({});

    const filterName = "TestFilter";
    store.dispatch(actions.deleteFilter(filterName));

    const producedActions = store.getActions();
    const deleteFilterAction = createAction(constants.DELETE_FILTER);
    const filterUsersAction = createAction(constants.FILTER_USERS);

    expect(producedActions).toEqual([deleteFilterAction(filterName), filterUsersAction()]);
  });
});