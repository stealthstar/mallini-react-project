export const viewReducer = (state = {
	activeProductId: 1
}, action) => {
	switch (action.type) {
		case 'CHANGE_PRODUCT':
			return {
				...state,
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