export function removeFromCart(arr) {
	return {
		type: "REMOVE_FROM_CART",
		payload: arr
	};
}