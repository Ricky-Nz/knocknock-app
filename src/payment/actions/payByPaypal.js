import fetch from '../../fetch';

export const ACTION_PAY_BY_PAYPAL = 'ACTION_PAY_BY_PAYPAL';

export function payByPaypal(orderId, amount) {
	return (dispatch, getState) => {
		const { session } = getState();

		fetch({
			dispatch,
			actionName: ACTION_PAY_BY_PAYPAL,
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
