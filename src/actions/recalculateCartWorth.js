export function recalculateCartWorth(multiplier) {
	return {
		type: "RECALCULATE_CART",
		payload: multiplier
	};
}