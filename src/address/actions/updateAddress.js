import fetch from '../../fetch';

export const ACTION_UPDATE_ADDRESS = 'ACTION_UPDATE_ADDRESS';

export function updateAddress({id, address, postal_code, contact_no, unit_number}) {
	return (dispatch, getState) => {
		const { session } = getState();

		runAction({
			dispatch,
			actionName: ACTION_UPDATE_ADDRESS,
			method: 'PUT',
			path: `user_addresses/${id}`,
			headers: {
				'Authorization': `${session.tokenType} ${session.token}`
			},
			body: {
				id,
				address,
				postal_code,
				unit_number,
				contact_no
			}
		});
	};
}