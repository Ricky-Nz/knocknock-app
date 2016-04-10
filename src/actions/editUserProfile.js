import runAction from './runAction';

export const ACTION_EDIT_USER_PROFILE = 'ACTION_EDIT_USER_PROFILE';

export function editUserProfile({contactNo, email, firstName, lastName}) {
	return (dispatch, getState) => {
		const { appState } = getState();

		runAction({
			dispatch,
			actionName: ACTION_EDIT_USER_PROFILE,
			method: 'PUT',
			path: `users/me`,
			headers: {
				'Authorization': `${appState.tokenType} ${appState.token}`
			},
			body: {
				email,
				contact_no: contactNo,
				first_name: firstName,
				last_name: lastName
			}
		});
	};
}