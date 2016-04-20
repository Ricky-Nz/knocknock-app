export const ACTION_RECORD_DEFAULT_ADDRESS = 'ACTION_RECORD_DEFAULT_ADDRESS';

export function recordDefaultAddress(address) {
	return {
		type: ACTION_RECORD_DEFAULT_ADDRESS,
		data: address
	};
}