import runAction from './runAction';

export const ACTION_RESET_PASSWORD = 'ACTION_RESET_PASSWORD';

export function resetPassword(password) {
	return (dispatch, getState) => {
		const { session } = getState();

		runAction({
			dispatch,
			actionName: ACTION_RESET_PASSWORD,
			method: 'PUT',
			path: `users/me/password`,
			headers: {
				'Authorization': `${session.tokenType} ${session.token}`
			},
			body: {
				password,
				password_confirmation: password
			}
		});
	};
}