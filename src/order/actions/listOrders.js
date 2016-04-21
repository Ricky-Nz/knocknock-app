import fetch from '../../fetch';

export const ACTION_LIST_ORDERS = 'ACTION_LIST_ORDERS';

export function listOrders(refresh) {
	return (dispatch, getState) => {
		const { session } = getState();

		fetch({
			dispatch,
			actionName: ACTION_LIST_ORDERS,
			arg: refresh,
			method: 'GET',
			path: 'orders',
			headers: {
				'Authorization': `${session.tokenType} ${session.token}`
			}
		});
	};
}