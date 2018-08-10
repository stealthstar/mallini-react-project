import { createStore, applyMiddleware } from "redux";

import thunk from "redux-thunk";
import promise from 'redux-promise-middleware';
import {createLogger} from 'redux-logger';
import createHistory from 'history/createBrowserHistory';
import { routerMiddleware } from "react-router-redux";

import rootReducer from "../reducers/rootReducer";
const history = createHistory();
const middleware = applyMiddleware(promise(), routerMiddleware(history), thunk, createLogger() );

const store = createStore(rootReducer, {} ,middleware);

export default store;