export const iconReducer = (state = {
	compare: [],
	wishlist: [],
	cart: []
}, action) => {
	switch (action.type) {
		case 'ADD_COMPARE':
			return {
				...state,
				compare: state.compare.concat(action.payload)
			}
		case 'REMOVE_COMPARE':
			return {
				...state,
				compare: state.compare.filter(item => item !== action.payload)
			}
		case 'REMOVE_WISH':
			return {
				...state,
				wishlist: state.wishlist.filter(item => item !== action.payload)
			}
		case 'ADD_WISH':
			return {
				...state,
				wishlist: state.wishlist.concat(action.payload)
			}
		case 'RESET_COMPARE':
			return {
				...state,
				compare: []			
			}
		default:
			return state;
	}
}
