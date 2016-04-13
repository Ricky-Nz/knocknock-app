import runAction from './runAction';

export const ACTION_CREATE_ORDER = 'ACTION_CREATE_ORDER';

export function createOrder({description, pickupPostalCode,
		totalPrice, pickupAddress, pickupApartmentType,
		pickupDate, orderDetails}) {
	return (dispatch, getState) => {
		const { appState } = getState();

		runAction({
			dispatch,
			actionName: ACTION_CREATE_ORDER,
			method: 'POST',
			path: 'orders',
			headers: {
				'Authorization': `${appState.tokenType} ${appState.token}`
			},
			params: {
				v2: 't'
			},
			body: {
				description,
				lazy_order: !orderDetails||orderDetails.length===0,
				pickup_postal_code: pickupPostalCode,
				total_price: totalPrice||0,
				pickup_address: pickupAddress,
				express_order: false,
				pickup_apartment_type: pickupApartmentType,
				order_source_id: 3,
				pickup_date: pickupDate,
				order_details: orderDetails&&orderDetails.map(item => ({
					item_id: item.itemId,
					quantity,
					laundry_type: item.laundryType,
					sub_total_price: item.subTotalPrice
				}))
			}
		});
	};
}
