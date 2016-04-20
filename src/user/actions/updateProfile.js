import fetch from './fetch';

export const ACTION_UPDATE_PROFILE = 'ACTION_UPDATE_PROFILE';

export function updateProfile({contactNo, email, firstName, lastName}) {
	return (dispatch, getState) => {
		const { session } = getState();

		fetch({
			dispatch,
			actionName: ACTION_UPDATE_PROFILE,
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