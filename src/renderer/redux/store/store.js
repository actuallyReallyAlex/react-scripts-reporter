import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import configReducer from "../reducers/config";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers({
    config: configReducer
  }),
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
