export function changeCurrency(currency) {
	return {
		type: "CHANGE_CURRENCY",
		payload: currency
	};
}