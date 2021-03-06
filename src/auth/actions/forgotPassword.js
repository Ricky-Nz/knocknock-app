import fetch from '../../fetch';

export const ACTION_FORGOT_PASSWORD = 'ACTION_FORGOT_PASSWORD';

export function forgotPassword(email) {
	return (dispatch) => {
		fetch({
			dispatch,
			actionName: ACTION_FORGOT_PASSWORD,
			arg: email,
			method: 'POST',
			path: `users/reset_password`,
			body: {
				email
			}
		});
	};
}