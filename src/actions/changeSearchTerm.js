export function changeSearchTerm(search) {
	return {
		type: "CHANGE_SEARCH_TERM",
		payload: search
	};
}