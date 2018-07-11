export function showMenu() {
	return {
		type: "SHOW_MENU"
	};
}
export function hideMenu() {
	return {
		type: "HIDE_MENU"
	};
}
export function changeActive(id) {
	return {
		type: "CHANGE_ACTIVE",
		payload: id
	};
}