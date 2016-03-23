import "babel-polyfill";

import configureMockStore from "redux-mock-store";
import promiseMiddleware from "redux-promise";
import thunk from "redux-thunk";

const middlewares = [thunk, promiseMiddleware];
const mockStore = configureMockStore(middlewares);

export default mockStore;