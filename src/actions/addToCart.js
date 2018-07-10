export function addToCart(object) {
	return {
		type: "ADD_TO_CART",
		payload: object
	};
}