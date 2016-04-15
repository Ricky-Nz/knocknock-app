import runAction from './runAction';

export const ACTION_REGISTER = 'ACTION_REGISTER';

export function register({phoneNumber, password, contactNo}) {
	return (dispatch) => {
		runAction({
			dispatch,
			actionName: ACTION_REGISTER,
			method: 'POST',
			path: `users`,
			body: {
				email: 'test@test.com',
				contact_no: phoneNumber,
				password,
				password_confirmation: password
			}
		});
	};
}