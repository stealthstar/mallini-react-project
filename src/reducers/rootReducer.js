import {combineReducers} from 'redux';
import {viewReducer} from './viewReducer'
import {dropdownReducer} from './dropdownReducer'
import {cartReducer} from './cartReducer'
import {searchReducer} from './searchReducer'


// const rootReducer = (state = {
// 	viewName: 'home',
// 	activeProductId: 1,
// 	langDropdown: 'en',
// 	currencyDropdown: 'usd' 
// }, action) => {
// 	switch(action.type) {
// 		case 'SHOW_PRODUCT':
// 			return {
// 				...state,
// 				viewName: 'product',
// 				activeProductId: action.payload
// 			}
// 		case 'SHOW_HOMEPAGE':
// 			return {
// 				...state,
// 				viewName: 'home'
// 			}
// 		default: 
// 			return state;
// 	}
// }

const rootReducer = combineReducers({
 	viewReducer,
	dropdownReducer,
	cartReducer,
	searchReducer
});

export default rootReducer;