export const ACTION_PRE_FORGOT_PASSWORD = 'ACTION_PRE_FORGOT_PASSWORD';

export function preForgotPassword(address) {
	return {
		type: ACTION_PRE_FORGOT_PASSWORD,
		data: address
	};
}