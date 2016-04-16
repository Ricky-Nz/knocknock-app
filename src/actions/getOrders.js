import runAction from './runAction';

export const ACTION_GET_ORDERS = 'ACTION_GET_ORDERS';

export function getOrders(refresh) {
	return (dispatch, getState) => {
		const { session } = getState();

		runAction({
			dispatch,
			actionName: ACTION_GET_ORDERS,
			arg: refresh,
			method: 'GET',
			path: 'orders',
			headers: {
				'Authorization': `${session.tokenType} ${session.token}`
			}
		});
	};
}