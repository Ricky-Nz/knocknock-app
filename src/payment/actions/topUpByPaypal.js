import fetch from '../../fetch';

export const ACTION_TOPUP_BY_PAYPAL = 'ACTION_TOPUP_BY_PAYPAL';

export function topUpByPaypal(amount) {
	return (dispatch, getState) => {
		const { session } = getState();

		fetch({
			dispatch,
			actionName: ACTION_TOPUP_BY_PAYPAL,
			method: 'POST',
			path: 'credits/paypal',
			headers: {
				'Authorization': `${session.tokenType} ${session.token}`
			},
			body: {
				payment_total: amount,
				return_url: 'http://www.knocknock.com',
				cancel_url: 'http://www.yahoo.com',
				payment_desc: 'Knocknock Top Up-'
			}
		});
	};
}