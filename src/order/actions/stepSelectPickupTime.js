export const ACTION_STEP_SELECT_PICKUP_TIME = 'ACTION_STEP_SELECT_PICKUP_TIME';

export function stepSelectPickupTime(time) {
	return {
		type: ACTION_STEP_SELECT_PICKUP_TIME,
		data: time
	};
}