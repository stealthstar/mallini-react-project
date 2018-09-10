export const cartReducer = (state = {
	items: [],
	itemsAmount: 0,
	cartWorth: 0.00
}, action) => {
	switch (action.type) {
		case 'ADD_TO_CART':
		//payload is an array: {id, price}
			return {
				...state,
				items: {...state.items, 
					[action.payload[0]]: state.items[action.payload[0]]+1 || 1
				},
				itemsAmount: state.itemsAmount + 1,
				cartWorth: state.cartWorth + action.payload[1]
			}
		case 'REMOVE_FROM_CART':
			//payload is an array: {id, price}
			return {
				...state,
				items: {
					...state.items,
					[action.payload[0]]: state.items[action.payload[0]] - 1
				},
				itemsAmount: state.itemsAmount - 1,
				cartWorth: state.cartWorth - action.payload[1] === -0 ? 0.00 : state.cartWorth - action.payload[1]
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
