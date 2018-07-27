export const viewReducer = (state = {
	viewName: 'home',
	activeProductId: 1
}, action) => {
	switch (action.type) {
		case 'SHOW_PRODUCT':
			return {
				...state,
				viewName: 'product',
				activeProductId: action.payload
			}
		case 'CHANGE_VIEW':
			return {
				...state,
				viewName: action.payload
			}
		case 'SHOW_HOMEPAGE':
			return {
				...state,
				viewName: 'home'
			}
		default:
			return state;
	}
}