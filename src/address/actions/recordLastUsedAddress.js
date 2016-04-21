export const ACTION_RECORD_LAST_ADDRESS = 'ACTION_RECORD_LAST_ADDRESS'

export function recordLastUsedAddress(address) {
	return {
		type: ACTION_RECORD_LAST_ADDRESS,
		data: address
	};
}