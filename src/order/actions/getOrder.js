import runAction from './runAction';

export const ACTION_GET_ORDER = 'ACTION_GET_ORDER';

export function getOrder(orderId, refresh) {
	return (dispatch, getState) => {
		const { session } = getState();

		runAction({
			dispatch,
			actionName: ACTION_GET_ORDER,
			arg: refresh,
			method: 'GET',
			path: `orders/${orderId}`,
			headers: {
				'Authorization': `${session.tokenType} ${session.token}`
			}
		});
	};
}