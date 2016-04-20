import fetch from '../../fetch';

export const ACTION_LIST_PRODUCTS = 'ACTION_LIST_PRODUCTS';

export function listProducts() {
	return (dispatch, getState) => {
		const { session } = getState();

		fetch({
			dispatch,
			actionName: ACTION_LIST_PRODUCTS,
			method: 'GET',
			path: 'items',
			headers: {
				'Authorization': `${session.tokenType} ${session.token}`
			}
		});
	};
}