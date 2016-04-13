import { ACTION_LOGIN, ACTION_GET_USER_ADDRESSES,
	ACTION_GET_DISTRICTS, ACTION_GET_PRODUCTS, ACTION_GET_ORDERS, ACTION_REGISTER,
	ACTION_TOAST_MESSAGE, ACTION_CREATE_ADDRESS, ACTION_EDIT_ADDRESS,
	ACTION_GET_VOUCHERS, ACTION_RESET_PASSWORD, ACTION_GET_USER_PROFILE,
	ACTION_EDIT_USER_PROFILE, ACTION_CREATE_ORDER, ACTION_EDIT_AVATAR,
	ACTION_CHANGE_ACTIVE_ORDER_SORT, ACTION_CHANGE_HISTORY_ORDER_SORT,
	ACTION_CHANGE_ACTIVE_ORDER_FILETER, ACTION_CHANGE_HISTORY_ORDER_FILETER } from '../actions';

function statusProcess(state, statusKey, {running, error, data}, successToast, convertData) {
	if (running) {
		return {...state, [statusKey]: true};
	} else if (error) {
		return {...state, [statusKey]: false, toast: {message: error.message, success: false}};
	} else {
		return {...state, [statusKey]: false, ...convertData&&convertData(data),
			toast: successToast?{message: 'Success', success: true}:state.toast};
	}
}

export default function (appState = {
	activeOrderSortType: 'pickupDate',
	historyOrderSortType: 'dropOffDate',
	activeOrderFilter: 'ALL',
	historyOrderFileter: 'ALL',
	tokenType: "Bearer",
	token: "cfec7eb1dde92dcbdcd894ec3b92af94ca45bea1b7a8370b743c1e7a56c010cf"
}, action) {
	switch(action.type) {
		case ACTION_TOAST_MESSAGE:
			return {...appState, toast: {message: action.message}};
		case ACTION_LOGIN:
			return statusProcess(appState, 'loggingin', action, false, data => ({
				token: data.access_token,
				tokenType: 'Bearer', //data.token_type,
				refreshToken: data.refresh_token,
				role: data.scope
			}));
		case ACTION_REGISTER:
			return statusProcess(appState, 'registering', action);
		case ACTION_GET_ORDERS:
			return statusProcess(appState, 'loadingOrders', action);
		case ACTION_GET_PRODUCTS:
			return statusProcess(appState, 'loadingProducts', action);
		case ACTION_GET_DISTRICTS:
			return statusProcess(appState, 'loadingDistricts', action);
		case ACTION_GET_USER_ADDRESSES:
			return statusProcess(appState, 'loadingAddresses', action);
		case ACTION_GET_VOUCHERS:
			return statusProcess(appState, 'loadingVouchers', action);
		case ACTION_RESET_PASSWORD:
			return statusProcess(appState, 'resetingPassword', action);
		case ACTION_CREATE_ADDRESS:
		case ACTION_EDIT_ADDRESS:
			return statusProcess(appState, 'changingAddress', action, true);
		case ACTION_EDIT_AVATAR:
			return statusProcess(appState, 'changingAvatar', action, true);
		case ACTION_GET_USER_PROFILE:
		case ACTION_EDIT_USER_PROFILE:
			return statusProcess(appState, 'changingUserProfile', action, true);
		case ACTION_CREATE_ORDER:
			return statusProcess(appState, 'creatingOrder', action, true);
		case ACTION_CHANGE_ACTIVE_ORDER_SORT:
			return {...appState, activeOrderSortType: action.data};
		case ACTION_CHANGE_HISTORY_ORDER_SORT:
			return {...appState, historyOrderSortType: action.data};
		case ACTION_CHANGE_ACTIVE_ORDER_FILETER:
			return {...appState, activeOrderFilter: action.data};
		case ACTION_CHANGE_HISTORY_ORDER_FILETER:
			return {...appState, historyOrderFileter: action.data};
		default:
			return appState;
	}
}