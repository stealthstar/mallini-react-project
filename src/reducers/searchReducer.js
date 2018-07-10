export const searchReducer = (state = {
	searchCategory: "All Categories",
	searchTerm: ''
}, action) => {
	switch (action.type) {
		case 'CHANGE_SEARCH_TERM':
			return {
				...state,
				searchTerm: action.payload
			}
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
