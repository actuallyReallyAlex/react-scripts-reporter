import { createStore, combineReducers } from "redux";
import configReducer from "../reducers/config";

const store = createStore(
  combineReducers({
    config: configReducer
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
