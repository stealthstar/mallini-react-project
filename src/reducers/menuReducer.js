export const menuReducer = (state = {
	mobileMenu: false,
	active: ''
}, action) => {
	switch (action.type) {
		case 'SHOW_MENU':
			return {
				...state,
				mobileMenu: true
			}
		case 'HIDE_MENU':
			return {
				...state,
				mobileMenu: false
			}
		case "CHANGE_ACTIVE":
			return {
				...state,
				active: action.payload
			}
		default:
			return state;
	}
}
