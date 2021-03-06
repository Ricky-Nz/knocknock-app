import fetch from '../../fetch';

export const ACTION_LIST_VOUCHERS = 'ACTION_LIST_VOUCHERS';

export function listVouchers(toast) {
	return (dispatch, getState) => {
		const { session } = getState();

		fetch({
			dispatch,
			actionName: ACTION_LIST_VOUCHERS,
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