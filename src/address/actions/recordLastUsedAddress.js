export const ACTION_RECORD_LAST_USED_ADDRESS = 'ACTION_RECORD_LAST_USED_ADDRESS'

export function recordLastUsedAddress(address) {
	return {
		type: ACTION_RECORD_LAST_USED_ADDRESS,
		data: address
	};
}