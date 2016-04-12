export const ACTION_TOAST_MESSAGE = 'ACTION_TOAST_MESSAGE';
export const ACTION_CHANGE_ORDER_SORT = 'ACTION_CHANGE_ORDER_SORT';

export function toastMessage(message) {
	return {
		type: ACTION_TOAST_MESSAGE,
		message
	};
}

export function changeOrderSort(value) {
	return {
		type: ACTION_CHANGE_ORDER_SORT,
		data: value
	};
}