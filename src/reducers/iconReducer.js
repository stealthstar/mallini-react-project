export const iconReducer = (state = {
	compare: 0,
	wishlist: [],
	cart: []
}, action) => {
	switch (action.type) {
		case 'ADD_COMPARE':
			return {
				...state,
				compare: state.compare + (action.payload)
			}
		case 'RESET_COMPARE':
			return {
				...state,
				compare: 0
			}
		default:
			return state;
	}
}
