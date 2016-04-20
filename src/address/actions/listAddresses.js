import fetch from '../../fetch';

export const ACTION_LIST_ADDRESSES = 'ACTION_LIST_ADDRESSES';

export function listAddresses(toast) {
	return (dispatch, getState) => {
		const { session } = getState();

		runAction({
			dispatch,
			actionName: ACTION_LIST_ADDRESSES,
			arg: toast,
			method: 'GET',
			path: 'user_addresses',
			headers: {
				'Authorization': `${session.tokenType} ${session.token}`
			}
		});
	};
}