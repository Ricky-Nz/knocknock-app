import runAction from './runAction';

export const ACTION_GET_ACCOUNT_INFO = 'ACTION_GET_ACCOUNT_INFO';

export function getAccountInfo(argument) {
	return (dispatch, getState) => {
		const { appState } = getState();

		runAction({
			dispatch,
			actionName: ACTION_GET_ACCOUNT_INFO,
			method: 'GET',
			path: 'users/me',
			headers: {
				'Authorization': `${appState.tokenType} ${appState.token}`
			}
		});
	};
}