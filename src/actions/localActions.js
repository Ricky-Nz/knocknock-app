export const ACTION_TOAST_MESSAGE = 'ACTION_TOAST_MESSAGE';
export const ACTION_CHANGE_ACTIVE_ORDER_SORT = 'ACTION_CHANGE_ACTIVE_ORDER_SORT';
export const ACTION_CHANGE_HISTORY_ORDER_SORT = 'ACTION_CHANGE_HISTORY_ORDER_SORT';
export const ACTION_CHANGE_ACTIVE_ORDER_FILETER = 'ACTION_CHANGE_ACTIVE_ORDER_FILETER';
export const ACTION_CHANGE_HISTORY_ORDER_FILETER = 'ACTION_CHANGE_HISTORY_ORDER_FILETER';
export const ACTION_CHANGE_PRODUCT_FILETER = 'ACTION_CHANGE_PRODUCT_FILETER';

export function toastMessage(message) {
	return {
		type: ACTION_TOAST_MESSAGE,
		message
	};
}

export function changeActiveOrderSort(value) {
	return {
		type: ACTION_CHANGE_ACTIVE_ORDER_SORT,
		data: value
	};
}

export function changeHistoryOrderSort(value) {
	return {
		type: ACTION_CHANGE_HISTORY_ORDER_SORT,
		data: value
	};
}

export function changeActiveOrderFilter(status) {
	return {
		type: ACTION_CHANGE_ACTIVE_ORDER_FILETER,
		data: status
	};
}

export function changeHistoryOrderFilter(status) {
	return {
		type: ACTION_CHANGE_HISTORY_ORDER_FILETER,
		data: status
	};
}

export function changeProductFilter(id) {
	return {
		type: ACTION_CHANGE_PRODUCT_FILETER,
		data: id
	};
}