export const ACTION_PREF_DELETE_ADDRESS = 'ACTION_PREF_DELETE_ADDRESS';

export function preDeleteAddress(address) {
	return {
		type: ACTION_PREF_DELETE_ADDRESS,
		data: address
	};
}