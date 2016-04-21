export const RECORD_LAST_USED_ADDRESS = 'RECORD_LAST_USED_ADDRESS';

export function recordLastUsedAddress(address) {
	return {
		type: RECORD_LAST_USED_ADDRESS,
		data: address
	};
}