export function changeQuantity(qty) {
	return {
		type: "CHANGE_QUANTITY",
		payload: qty
	};
}