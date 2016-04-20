export const ACTION_SELECT_PRODUCT = 'ACTION_SELECT_PRODUCT';

export function selectProduct(id) {
	return {
		type: ACTION_SELECT_PRODUCT,
		data: id
	};
}