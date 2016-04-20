import fetch from '../../fetch';

export const ACTION_DELETE_ADDRESS = 'ACTION_DELETE_ADDRESS';

export function deleteAddress(id) {
	return (dispatch, getState) => {
		const { session } = getState();

		fetch({
			dispatch,
			actionName: ACTION_DELETE_ADDRESS,
			arg: id,
			method: 'DELETE',
			path: `user_addresses/${id}`,
			headers: {
				'Authorization': `${session.tokenType} ${session.token}`
			}
		});
	};
}