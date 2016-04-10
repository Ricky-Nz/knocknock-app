import runAction from './runAction';

export const ACTION_CREATE_ADDRESS = 'ACTION_CREATE_ADDRESS';

export function createAddress({address, postalCode, contactNo, unitNumber}) {
	return (dispatch, getState) => {
		if ('sf' === 'ff') {

		}
		const { appState } = getState();

		runAction({
			dispatch,
			actionName: ACTION_CREATE_ADDRESS,
			method: 'POST',
			path: 'user_addresses',
			headers: {
				'Authorization': `${appState.tokenType} ${appState.token}`
			},
			body: {
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