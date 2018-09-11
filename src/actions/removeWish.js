export function removeWish(wish) {
	return {
		type: "REMOVE_WISH",
		payload: wish
	};
}