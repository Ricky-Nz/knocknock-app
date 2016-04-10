import runAction from './runAction';

export const ACTION_EDIT_ADDRESS = 'ACTION_EDIT_ADDRESS';

export function editAddress({addressId, address, postalCode, contactNo, unitNumber}) {
	return (dispatch, getState) => {
		const { appState } = getState();

		runAction({
			dispatch,
			actionName: ACTION_EDIT_ADDRESS,
			method: 'PUT',
			path: `user_addresses/${addressId}`,
			headers: {
				'Authorization': `${appState.tokenType} ${appState.token}`
			},
			body: {
				id: addressId,
				address,
				name: 'home',
				contact_no: contactNo,
				postal_code: postalCode,
				unit_number: unitNumber,
				apartment_type: 'commercial'
			}
		});
	};
}