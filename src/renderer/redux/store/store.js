import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import configReducer from "../reducers/config";
import uiReducer from "../reducers/ui";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers({
    config: configReducer,
    ui: uiReducer
  }),
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
