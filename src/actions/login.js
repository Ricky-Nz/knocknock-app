import runAction from './runAction';

export const ACTION_LOGIN = 'ACTION_LOGIN';

export function login({username, password}) {
	return (dispatch, getState) => {

		runAction({
			dispatch,
			actionName: ACTION_LOGIN,
			method: 'POST',
			path: `oauth/token`,
			body: {
				grant_type: 'password',
				scope: 'user',
				username,
				password
			}
		});
	};
}