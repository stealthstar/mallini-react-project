export function removeFromCart(object) {
	return {
		type: "REMOVE_FROM_CART",
		payload: object
	};
}