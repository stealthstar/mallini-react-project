export const cartReducer = (state = {
	items: [],
	cartWorth: 0.00
}, action) => {
	switch (action.type) {
		case 'ADD_TO_CART':
			return {
				...state,
				items: state.items.concat(action.payload[0]),
				cartWorth: state.cartWorth + action.payload[1]
			}
		case 'REMOVE_FROM_CART':
			return {
				...state,
				cartWorth: state.cartWorth - action.payload.amount
			}
		case "RECALCULATE_CART":
			return {
				...state,
				cartWorth: state.cartWorth * action.payload
			}
		default:
			return state;
	}
}
