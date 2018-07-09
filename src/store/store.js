import { createStore, applyMiddleware } from "redux";

import thunk from "redux-thunk";
import promise from 'redux-promise-middleware';
import {createLogger} from 'redux-logger';

import rootReducer from "../reducers/rootReducer";

const middleware = applyMiddleware(promise(), thunk, createLogger());

const store = createStore(rootReducer, {} ,middleware);

export default store;