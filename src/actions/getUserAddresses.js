import runAction from './runAction';

export const ACTION_GET_USER_ADDRESSES = 'ACTION_GET_USER_ADDRESSES';

export function getUserAddresses(toast) {
	return (dispatch, getState) => {
		const { session } = getState();

		runAction({
			dispatch,
			actionName: ACTION_GET_USER_ADDRESSES,
			arg: toast,
			method: 'GET',
			path: 'user_addresses',
			headers: {
				'Authorization': `${session.tokenType} ${session.token}`
			}
		});
	};
}