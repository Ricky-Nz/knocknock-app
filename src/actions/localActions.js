export const ACTION_TOAST_MESSAGE = 'ACTION_TOAST_MESSAGE';
export const ACTION_CHANGE_ACTIVE_ORDER_SORT = 'ACTION_CHANGE_ACTIVE_ORDER_SORT';
export const ACTION_CHANGE_HISTORY_ORDER_SORT = 'ACTION_CHANGE_HISTORY_ORDER_SORT';
export const ACTION_CHANGE_ACTIVE_ORDER_FILETER = 'ACTION_CHANGE_ACTIVE_ORDER_FILETER';
export const ACTION_CHANGE_HISTORY_ORDER_FILETER = 'ACTION_CHANGE_HISTORY_ORDER_FILETER';
export const ACTION_CHANGE_PRODUCT_FILETER = 'ACTION_CHANGE_PRODUCT_FILETER';
export const ACTION_LOGOUT = 'ACTION_LOGOUT';
export const ACTION_SET_DEFAULT_ADDRESS = 'ACTION_SET_DEFAULT_ADDRESS';
export const ACTION_SET_DEFAULT_PICKUP_TIME = 'ACTION_SET_DEFAULT_PICKUP_TIME';
export const ACTION_SET_DEFAULT_NOTE = 'ACTION_SET_DEFAULT_NOTE';

export function toastMessage(data) {
	return {
		type: ACTION_TOAST_MESSAGE,
		data
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

export function logout() {
	return {
		type: ACTION_LOGOUT
	};
}

export function setDefaultAddress(address) {
	return {
		type: ACTION_SET_DEFAULT_ADDRESS,
		data: address
	};
}

export function setDefaultPickupTime(pickupAddress) {
	return {
		type: ACTION_SET_DEFAULT_PICKUP_TIME,
		data: pickupAddress
	};
}

export function setDefaultNote(note) {
	return {
		type: ACTION_SET_DEFAULT_NOTE,
		data: note
	};
}



