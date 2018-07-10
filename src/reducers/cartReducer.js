export const cartReducer = (state = {
	cartWorth: 0.00
}, action) => {
	switch (action.type) {
		case 'ADD_TO_CART':
			return {
				...state,
				cartWorth: state.cartWorth + action.payload.amount
			}
		case 'REMOVE_FROM_CART':
			return {
				...state,
				cartWorth: state.cartWorth - action.payload.amount
			}
		default:
			return state;
	}
}
