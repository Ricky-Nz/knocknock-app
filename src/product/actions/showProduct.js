export const ACTION_SHOW_PRODUCT = 'ACTION_SHOW_PRODUCT';

export function showProduct(product) {
	return {
		type: ACTION_SHOW_PRODUCT,
		data: product
	};
}