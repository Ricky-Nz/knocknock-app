import runAction from './runAction';

export const ACTION_REGISTER = 'ACTION_REGISTER';

export function register({email, phoneNumber, password, contactNo}) {
	return (dispatch) => {
		runAction({
			dispatch,
			actionName: ACTION_REGISTER,
			method: 'POST',
			path: `users`,
			body: {
				email: email,
				contact_no: phoneNumber,
				password,
				password_confirmation: password
			}
		});
	};
}