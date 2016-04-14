import runAction from './runAction';

export const ACTION_GET_USER_PROFILE = 'ACTION_GET_USER_PROFILE';

export function getUserProfile() {
	return (dispatch, getState) => {
		const { session } = getState();

		runAction({
			dispatch,
			actionName: ACTION_GET_USER_PROFILE,
			method: 'GET',
			path: `users/me`,
			headers: {
				'Authorization': `${session.tokenType} ${session.token}`
			}
		});
	};
}