import runAction from './runAction';

export const ACTION_EDIT_USER_PROFILE = 'ACTION_EDIT_USER_PROFILE';

export function editUserProfile({contactNo, email, firstName, lastName}) {
	return (dispatch, getState) => {
		const { session } = getState();

		runAction({
			dispatch,
			actionName: ACTION_EDIT_USER_PROFILE,
			method: 'PUT',
			path: `users/me`,
			headers: {
				'Authorization': `${session.tokenType} ${session.token}`
			},
			body: {
				email,
				contact_no: '96452556',
				first_name: firstName,
				last_name: lastName
			}
		});
	};
}