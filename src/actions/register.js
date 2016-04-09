import runAction from './runAction';

export const ACTION_REGISTER = 'ACTION_REGISTER';

export function register({username, password, contactNo}) {
	return (dispatch) => {
		runAction({
			dispatch,
			actionName: ACTION_REGISTER,
			method: 'POST',
			path: `users`,
			body: {
				email: username,
				contact_no: contactNo,
				password,
				password_confirmation: password
			}
		});
	};
}