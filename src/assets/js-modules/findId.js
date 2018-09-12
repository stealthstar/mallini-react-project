export const findId = (IDnumber, data) => {
	// returns an object containing 
	//by searching through data by id property
	let id = IDnumber, res;
	for (let i = 0; i < data.products.length; i++) {
		if (data.products[i].id === id) {
			res = data.products[i];
		}
	}
	return res;
};