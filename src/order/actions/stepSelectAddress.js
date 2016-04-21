export const ACTION_STEP_SELECT_ADDRESS = 'ACTION_STEP_SELECT_ADDRESS';

export function stepSelectAddress(address) {
	return {
		type: ACTION_STEP_SELECT_ADDRESS,
		data: address
	};
}