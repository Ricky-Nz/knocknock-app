import runAction from './runAction';

export const ACTION_GET_ORDER_DETAIL = 'ACTION_GET_ORDER_DETAIL';

export function getOrderDetail(orderId, refresh) {
	return (dispatch, getState) => {
		const { session } = getState();

		runAction({
			dispatch,
			actionName: ACTION_GET_ORDER_DETAIL,
			arg: refresh,
			method: 'GET',
			path: `orders/${orderId}`,
			headers: {
				'Authorization': `${session.tokenType} ${session.token}`
			}
		});
	};
}