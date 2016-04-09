import runAction from './runAction';

export const ACTION_GET_PRODUCTS = 'ACTION_GET_PRODUCTS';

export function getProducts() {
	return (dispatch, getState) => {
		const { appState } = getState();

		runAction({
			dispatch,
			actionName: ACTION_GET_PRODUCTS,
			method: 'GET',
			path: 'items',
			headers: {
				'Authorization': `${appState.tokenType} ${appState.token}`
			}
		});
	};
}