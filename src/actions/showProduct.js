export function showProduct(id) {
	return {
		type: "SHOW_PRODUCT",
		payload: id
	};
}