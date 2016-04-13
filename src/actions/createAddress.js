import runAction from './runAction';

export const ACTION_CREATE_ADDRESS = 'ACTION_CREATE_ADDRESS';

export function createAddress({address, postal_code, contact_no, unit_number}) {
	return (dispatch, getState) => {
		const { appState } = getState();

		runAction({
			dispatch,
			actionName: ACTION_CREATE_ADDRESS,
			method: 'POST',
			path: 'user_addresses',
			headers: {
				'Authorization': `${appState.tokenType} ${appState.token}`
			},
			form: {
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