import { ACTION_LOGIN, ACTION_GET_ACCOUNT_INFO, ACTION_GET_USER_ADDRESSES,
	ACTION_GET_DISTRICTS, ACTION_GET_PRODUCTS, ACTION_GET_ORDERS, ACTION_REGISTER,
	ACTION_TOAST_MESSAGE } from '../actions';

function statusProcess (state, statusKey, {running, error, data}, convertData) {
	if (running) {
		return {...state, [statusKey]: true};
	} else if (error) {
		return {...state, [statusKey]: false, error};
	} else {
		return {...state, [statusKey]: false, ...convertData&&convertData(data)};
	}
}

export default function (appState = {}, action) {
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
		case ACTION_GET_ACCOUNT_INFO:
			return statusProcess(appState, 'loadingAccountInfo', action);
		default:
			return appState;
	}
}