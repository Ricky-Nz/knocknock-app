import fetch from '../../fetch';

export const ACTION_GET_PROFILE = 'ACTION_GET_PROFILE';

export function getProfile(toast) {
	return (dispatch, getState) => {
		const { session } = getState();

		fetch({
			dispatch,
			actionName: ACTION_GET_PROFILE,
			arg: toast,
			method: 'GET',
			path: `users/me`,
			headers: {
				'Authorization': `${session.tokenType} ${session.token}`
			}
		});
	};
}