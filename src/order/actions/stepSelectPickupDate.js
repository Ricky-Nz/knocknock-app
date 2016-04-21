export const ACTION_STEP_SELECT_PICKUP_DATE = 'ACTION_STEP_SELECT_PICKUP_DATE';

export function stepSelectPickupDate(date) {
	return {
		type: ACTION_STEP_SELECT_PICKUP_DATE,
		data: date
	};
}