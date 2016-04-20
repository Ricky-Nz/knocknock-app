import fetch from '../../fetch';

export const ACTION_LOGIN = 'ACTION_LOGIN';

export function logIn({email, password}) {
	return (dispatch, getState) => {

		fetch({
			dispatch,
			actionName: ACTION_LOGIN,
			method: 'POST',
			path: `oauth/token`,
			body: {
				grant_type: 'password',
				scope: 'user',
				username: email,
				password
			}
		});
	};
}