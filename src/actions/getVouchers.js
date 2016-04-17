import runAction from './runAction';

export const ACTION_GET_VOUCHERS = 'ACTION_GET_VOUCHERS';

export function getVouchers(toast) {
	return (dispatch, getState) => {
		const { session } = getState();

		runAction({
			dispatch,
			actionName: ACTION_GET_VOUCHERS,
			arg: toast,
			method: 'GET',
			path: 'vouchers',
			headers: {
				'Authorization': `${session.tokenType} ${session.token}`
			},
			params: {
				expired: true
			}
		});
	};
}