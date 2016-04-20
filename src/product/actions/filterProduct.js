export const ACTION_FILETER_PRODUCT = 'ACTION_FILETER_PRODUCT';

export function filterProduct(category) {
	return {
		type: ACTION_FILETER_PRODUCT,
		data: category
	};
}