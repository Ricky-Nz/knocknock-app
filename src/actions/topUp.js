import runAction from './runAction';

export const ACTION_TOPUP = 'ACTION_TOPUP';

export function topUp(amount) {
	return (dispatch, getState) => {
		const { appState } = getState();

		runAction({
			dispatch,
			actionName: ACTION_TOPUP,
			method: 'POST',
			path: 'credits/paypal',
			headers: {
				'Authorization': `${appState.tokenType} ${appState.token}`
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