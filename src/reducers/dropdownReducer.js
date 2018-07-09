export const dropdownReducer = (state = {
	langDropdown: 'en',
	currencyDropdown: 'usd'
}, action) => {
	switch (action.type) {
		case 'CHANGE_LANGUAGE':
			return {
				...state,
				langDropdown: action.payload
			}
		case 'CHANGE_CURRENCY':
			return {
				...state,
				currencyDropdown: action.payload
			}
		default:
			return state;
	}
}
