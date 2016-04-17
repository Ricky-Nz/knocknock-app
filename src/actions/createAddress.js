import runAction from './runAction';
import doFetch from './doFetch';

export const ACTION_CREATE_ADDRESS = 'ACTION_CREATE_ADDRESS';

export function createAddress({address, postal_code, contact_no, unit_number}) {
	return (dispatch, getState) => {
		// doFetch({
		// 	method: 'GET',
		// 	host: 'http://maps.apps-bus.com/api',
		// 	path: 'Places/SearchPlace',
		// 	params: {
		// 		query: postal_code,
		// 		page: 1
		// 	}
		// }).then(data => {
		// 	if (data.Data && data.Data.length === 0) {
		// 		throw new Error('address not found');
		// 	}

		// 	const x = data.Data[0].XCoordinate;
		// 	const y = data.Data[0].YCoordinate;
		// 	const { session } = getState();

		// 	return doFetch({
		// 		method: 'GET',
		// 		host: 'http://www.onemap.sg',
		// 		path: 'API/services.svc/revgeocode',
		// 		params: {
		// 			token: 'qo/s2TnSUmfLz+32CvLC4RMVkzEFYjxqyti1KhByvEacEdMWBpCuSSQ+IFRT84QjGPBCuz/cBom8PfSm3GjEsGc8PkdEEOEr',
		// 			location: `${x},${y}`,
		// 			buffer: 200
		// 		},
		// 		headers: {
		// 			'Authorization': `${session.tokenType} ${session.token}`
		// 		}
		// 	});
		// }).then(data => {
			const { session } = getState();

			runAction({
				dispatch,
				actionName: ACTION_CREATE_ADDRESS,
				method: 'POST',
				path: 'user_addresses',
				headers: {
					'Authorization': `${session.tokenType} ${session.token}`
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
		// }).catch(error => {
		// 	dispatch({
		// 		type: ACTION_CREATE_ADDRESS,
		// 		running: false,
		// 		error
		// 	});
		// });
	};
}