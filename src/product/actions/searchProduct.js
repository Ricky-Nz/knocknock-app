export const ACTION_SEARCH_PRODUCT = 'ACTION_SEARCH_PRODUCT';

export function searchProduct(text) {
	return {
		type: ACTION_SEARCH_PRODUCT,
		data: text
	};
}