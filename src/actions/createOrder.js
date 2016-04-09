import runAction from './runAction';

export const ACTION_CREATE_ORDER = 'ACTION_CREATE_ORDER';

export function createOrder({description, lazyOrder, pickupPostalCode,
		totalPrice, pickupAddress, expressOrder, pickupApartmentType,
		orderSourceId, pickupDate, orderDetails}) {
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
				lazy_order: lazyOrder,
				pickup_postal_code: pickupPostalCode,
				total_price: totalPrice,
				pickup_address: pickupAddress,
				express_order: expressOrder,
				pickup_apartment_type: pickupApartmentType,
				order_source_id: orderSourceId,
				pickup_date: pickupDate,
				order_details: orderDetails&&orderDetails.map(item => ({
					item_id: itemId,
					quantity,
					laundry_type: laundryType,
					sub_total_price: subTotalPrice
				}))
			}
		});
	};
}