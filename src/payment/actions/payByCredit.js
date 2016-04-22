import fetch from '../../fetch';

export const ACTION_PAY_BY_CREDIT = 'ACTION_PAY_BY_CREDIT';

export function payByCredit(orderId) {
	return (dispatch, getState) => {
		const { session } = getState();

		fetch({
			dispatch,
			actionName: ACTION_PAY_BY_CREDIT,
			method: 'POST',
			path: `orders/${orderId}/credits`,
			headers: {
				'Authorization': `${session.tokenType} ${session.token}`
			}
		});
	};
}