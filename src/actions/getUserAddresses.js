import runAction from './runAction';

export const ACTION_GET_USER_ADDRESSES = 'ACTION_GET_USER_ADDRESSES';

export function getUserAddresses() {
	return (dispatch, getState) => {
		const { appState } = getState();

		runAction({
			dispatch,
			actionName: ACTION_GET_USER_ADDRESSES,
			method: 'GET',
			path: 'user_addresses',
			headers: {
				'Authorization': `${appState.tokenType} ${appState.token}`
			}
		});
	};
}