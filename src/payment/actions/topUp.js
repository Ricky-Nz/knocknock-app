import fetch from '../../fetch';

export const ACTION_TOPUP = 'ACTION_TOPUP';

export function topUp(amount) {
	return (dispatch, getState) => {
		const { session } = getState();

		fetch({
			dispatch,
			actionName: ACTION_TOPUP,
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