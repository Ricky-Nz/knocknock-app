import runAction from './runAction';

export const ACTION_EDIT_ADDRESS = 'ACTION_EDIT_ADDRESS';

export function editAddress({id, address, postal_code, contact_no, unit_number}) {
	return (dispatch, getState) => {
		const { session } = getState();

		runAction({
			dispatch,
			actionName: ACTION_EDIT_ADDRESS,
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
				contact_no,
				name: 'home',
				apartment_type: 'hdb'
			}
		});
	};
}