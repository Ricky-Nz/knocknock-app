export const ACTION_TOAST_MESSAGE = 'ACTION_TOAST_MESSAGE';

export function toast(data) {
	return {
		type: ACTION_TOAST_MESSAGE,
		data
	};
}