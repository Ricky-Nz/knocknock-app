export const ACTION_RECORD_DEFAULT_PICKUP_TIME = 'ACTION_RECORD_DEFAULT_PICKUP_TIME';

export function recordDefaultPickupTime(pickupAddress) {
	return {
		type: ACTION_RECORD_DEFAULT_PICKUP_TIME,
		data: pickupAddress
	};
}


