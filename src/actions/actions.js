export function showProduct(product) {
	return {
		type: "SHOW_PRODUCT",
		payload: product
	};
}
export function showHomePage() {
	return {
		type: "SHOW_HOMEPAGE"
	};
}
