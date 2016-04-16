import runAction from './runAction';

export const ACTION_FORGOT_PASSWORD = 'ACTION_FORGOT_PASSWORD';

export function forgotPassword(email) {
	return (dispatch) => {
		runAction({
			dispatch,
			actionName: ACTION_FORGOT_PASSWORD,
			method: 'POST',
			path: `users/reset_password`,
			body: {
				email
			}
		});
	};
}