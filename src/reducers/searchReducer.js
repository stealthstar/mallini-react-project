export const searchReducer = (state = {
	searchCategory: "All Categories"
}, action) => {
	switch (action.type) {
		case 'CHANGE_CATEGORY':
			return {
				...state,
				searchCategory: action.payload
			}
		case 'RESET_CATEGORY':
			return {
				...state,
				searchCategory: action.payload
			}
		default:
			return state;
	}
}
