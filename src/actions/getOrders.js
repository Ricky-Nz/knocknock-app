import runAction from './runAction';

export const ACTION_GET_ORDERS = 'ACTION_GET_ORDERS';

export function getOrders() {
	return (dispatch, getState) => {
		const { appState } = getState();

		runAction({
			dispatch,
			actionName: ACTION_GET_ORDERS,
			method: 'GET',
			path: 'orders',
			headers: {
				'Authorization': `${appState.tokenType} ${appState.token}`
			}
		});
	};
}