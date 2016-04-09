import runAction from './runAction';

export const ACTION_GET_DISTRICTS = 'ACTION_GET_DISTRICTS';

export function getDistricts() {
	return (dispatch, getState) => {
		const { appState } = getState();

		runAction({
			dispatch,
			actionName: ACTION_GET_DISTRICTS,
			method: 'GET',
			path: 'districts',
			headers: {
				'Authorization': `${appState.tokenType} ${appState.token}`
			},
			params: {
				available: true
			}
		});
	};
}