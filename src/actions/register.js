import runAction from './runAction';

export const ACTION_REGISTER = 'ACTION_REGISTER';

export function register({email, phone, password}) {
	return (dispatch) => {
		runAction({
			dispatch,
			actionName: ACTION_REGISTER,
			method: 'POST',
			path: `users`,
			body: {
				email: email,
				contact_no: phone,
				password,
				password_confirmation: password
			}
		});
	};
}