import {combineReducers} from 'redux';
import {viewReducer} from './viewReducer'
import {dropdownReducer} from './dropdownReducer'
import {cartReducer} from './cartReducer'
import {searchReducer} from './searchReducer'
import {iconReducer} from './iconReducer'
import {windowSizeReducer} from './windowSizeReducer'
import {menuReducer} from './menuReducer'

import thunk from "redux-thunk";
import { routerReducer } from "react-router-redux";

const rootReducer = combineReducers({
 	viewReducer,
	dropdownReducer,
	cartReducer,
	searchReducer,
	iconReducer,
	windowSizeReducer,
	menuReducer,
	routing: routerReducer
});

export default rootReducer;