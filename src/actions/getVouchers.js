import runAction from './runAction';

export const ACTION_GET_VOUCHERS = 'ACTION_GET_VOUCHERS';

export function getVouchers() {
	return (dispatch, getState) => {
		const { appState } = getState();

		runAction({
			dispatch,
			actionName: ACTION_GET_VOUCHERS,
			method: 'GET',
			path: 'vouchers',
			headers: {
				'Authorization': `${appState.tokenType} ${appState.token}`
			},
			params: {
				expired: true
			}
		});
	};
}