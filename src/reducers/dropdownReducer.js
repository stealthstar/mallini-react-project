export const dropdownReducer = (state = {
	langDropdown: 'en',
	currency: 'usd',
	currencySymbol: '\u0024'
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
				currency: action.payload[0],
				currencySymbol: action.payload[1]
			}
		default:
			return state;
	}
}
