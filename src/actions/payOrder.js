import runAction from './runAction';

export const ACTION_PAY_ORDER_BY_CREDIT = 'ACTION_PAY_ORDER_BY_CREDIT';
export const ACTION_PAY_ORDER_BY_PAYPAL = 'ACTION_PAY_ORDER_BY_PAYPAL';

export function payOrderByCredit(orderId) {
	return (dispatch, getState) => {
		const { session } = getState();

		runAction({
			dispatch,
			actionName: ACTION_PAY_ORDER_BY_CREDIT,
			method: 'POST',
			path: `orders/${orderId}/credits`,
			headers: {
				'Authorization': `${session.tokenType} ${session.token}`
			}
		});
	};
}


export function payOrderByPaypal(orderId, amount) {
	return (dispatch, getState) => {
		const { session } = getState();

		runAction({
			dispatch,
			actionName: ACTION_PAY_ORDER_BY_PAYPAL,
			method: 'POST',
			path: `orders/${orderId}/paypal`,
			headers: {
				'Authorization': `${session.tokenType} ${session.token}`
			},
			body: {
				id: orderId,
				payment_total: amount,
				return_url: 'http://www.knocknock.com',
				cancel_url: 'http://www.yahoo.com',
				payment_desc: `Knocknock Payment for Order ID-${orderId}`
			}
		});
	};
}
