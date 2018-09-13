import {combineReducers} from 'redux';
import {viewReducer} from './viewReducer'
import {dropdownReducer} from './dropdownReducer'
import {cartReducer} from './cartReducer'
import {searchReducer} from './searchReducer'
import {iconReducer} from './iconReducer'
import {windowSizeReducer} from './windowSizeReducer'
import {menuReducer} from './menuReducer'

import thunk from "redux-thunk";

const rootReducer = combineReducers({
 	viewReducer,
	dropdownReducer,
	cartReducer,
	searchReducer,
	iconReducer,
	windowSizeReducer,
	menuReducer
});

export default rootReducer;