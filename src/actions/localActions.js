export const ACTION_TOAST_MESSAGE = 'ACTION_TOAST_MESSAGE';

export function toastMessage (message) {
	return {
		type: ACTION_TOAST_MESSAGE,
		message
	};
}