import fetch from '../../fetch';

export const ACTION_GET_ADDRESSES = 'ACTION_GET_ADDRESSES';

export function getAddress(id) {
	return (dispatch, getState) => {
		const { session } = getState();

		runAction({
			dispatch,
			actionName: ACTION_GET_ADDRESSES,
			method: 'GET',
			path: `user_addresses/${id}`,
			headers: {
				'Authorization': `${session.tokenType} ${session.token}`
			}
		});
	};
}