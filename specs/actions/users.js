import expect from "expect";
import nock from "nock";
import {createAction} from "redux-actions";
import mockStore from "../helpers/mock-store";

import * as constants from "../../js/constants";
import * as actions from "../../js/actions/users";

describe("actions/users", () => {
  afterEach(() => {
    nock.cleanAll();
    actions.clearCache();
  });

  it("should dispatch TOGGLE_HIRE action", () => {
    const store = mockStore({});

    const userId = "1";
    store.dispatch(actions.toggleHire(userId));

    const producedActions = store.getActions();
    const toggleHireAction = createAction(constants.TOGGLE_HIRE);

    expect(producedActions).toEqual([toggleHireAction(userId)]);
  });

  it("should dispatch CLEAR_FILTERS, FETCH_USERS_REQUEST and FETCH_USERS_SUCCESS actions", (done) => {
    const store = mockStore({});

    nock(constants.API_URL).get("").reply(200, [{
      id: "1",
      email: "email@mail",
      online: true
    }]);

    store.dispatch(actions.fetchUsers()).then(() => {
      const expectedUsers = {
        "1": {
          id: "1",
          email: "email@mail",
          online: true
        }
      };

      const producedActions = store.getActions();

      const clearFiltersAction = createAction(constants.CLEAR_FILTERS);
      const fetchUsersRequestAction = createAction(constants.FETCH_USERS_REQUEST);
      const fetchUsersSuccessAction = createAction(constants.FETCH_USERS_SUCCESS);

      const expectedActions = [clearFiltersAction(), fetchUsersRequestAction(), fetchUsersSuccessAction(expectedUsers)];

      expect(producedActions).toEqual(expectedActions);
    }).then(done).catch(done);
  });

  it("should dispatch CLEAR_FILTERS, FETCH_USER_REQUEST and FETCH_USER_SUCCESS actions", (done) => {
    const store = mockStore({});

    nock(constants.API_URL).get("").reply(200, [{
      id: "1",
      email: "email@mail",
      online: true
    }]);

    store.dispatch(actions.fetchUser("1")).then(() => {
      const expectedUser = {
        id: "1",
        email: "email@mail",
        online: true
      };

      const producedActions = store.getActions();

      const clearFiltersAction = createAction(constants.CLEAR_FILTERS);
      const fetchUserRequestAction = createAction(constants.FETCH_USER_REQUEST);
      const fetchUserSuccessAction = createAction(constants.FETCH_USER_SUCCESS);

      const expectedActions = [clearFiltersAction(), fetchUserRequestAction(), fetchUserSuccessAction(expectedUser)];

      expect(producedActions).toEqual(expectedActions);
    }).then(done).catch(done);
  });
});