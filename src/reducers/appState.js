import { ACTION_LOGIN, ACTION_GET_USER_ADDRESSES,
	ACTION_GET_DISTRICTS, ACTION_GET_PRODUCTS, ACTION_GET_ORDERS, ACTION_REGISTER,
	ACTION_TOAST_MESSAGE, ACTION_CREATE_ADDRESS, ACTION_EDIT_ADDRESS,
	ACTION_GET_VOUCHERS, ACTION_RESET_PASSWORD, ACTION_GET_USER_PROFILE,
	ACTION_EDIT_USER_PROFILE, ACTION_CREATE_ORDER, ACTION_EDIT_AVATAR } from '../actions';

function statusProcess (state, statusKey, {running, error, data}, convertData) {
	if (running) {
		return {...state, [statusKey]: true};
	} else if (error) {
		return {...state, [statusKey]: false, error};
	} else {
		return {...state, [statusKey]: false, ...convertData&&convertData(data)};
	}
}

export default function (appState = {tokenType: "Bearer", token: "cfec7eb1dde92dcbdcd894ec3b92af94ca45bea1b7a8370b743c1e7a56c010cf"}, action) {
	switch(action.type) {
		case ACTION_TOAST_MESSAGE:
			return {...appState, error: {message: action.message}};
		case ACTION_LOGIN:
			return statusProcess(appState, 'loggingin', action, data => ({
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
			return statusProcess(appState, 'changingAddress', action);
		case ACTION_EDIT_AVATAR:
			return statusProcess(appState, 'changingAvatar', action);
		case ACTION_GET_USER_PROFILE:
		case ACTION_EDIT_USER_PROFILE:
			return statusProcess(appState, 'changingUserProfile', action);
		case ACTION_CREATE_ORDER:
			return statusProcess(appState, 'creatingOrder', action);
		default:
			return appState;
	}
}