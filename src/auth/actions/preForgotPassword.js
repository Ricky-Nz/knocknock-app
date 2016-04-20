export const ACTION_PREF_FORGOT_PASSWORD = 'ACTION_PREF_FORGOT_PASSWORD';

export function preForgotPassword(address) {
	return {
		type: ACTION_PREF_FORGOT_PASSWORD,
		data: address
	};
}