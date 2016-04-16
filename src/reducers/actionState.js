import {
	ACTION_LOGIN, ACTION_GET_USER_ADDRESSES,
	ACTION_GET_DISTRICTS, ACTION_GET_PRODUCTS, ACTION_GET_ORDERS, ACTION_REGISTER,
	ACTION_CREATE_ADDRESS, ACTION_EDIT_ADDRESS,
	ACTION_GET_VOUCHERS, ACTION_RESET_PASSWORD, ACTION_GET_USER_PROFILE,
	ACTION_EDIT_USER_PROFILE, ACTION_CREATE_ORDER, ACTION_EDIT_AVATAR,
	ACTION_GET_ORDER_DETAIL, ACTION_TOPUP, ACTION_LOGOUT,
	ACTION_PAY_ORDER_BY_CREDIT, ACTION_PAY_ORDER_BY_PAYPAL,
	ACTION_FORGOT_PASSWORD
} from '../actions';

function statusProcess(state, statusKey, {running, error}) {
	if (running) {
		return {...state, [statusKey]: true};
	} else {
		return {...state, [statusKey]: false, [`${statusKey}Success`]: error?false:true};
	}
}

export default function (actionState = {}, action) {
	switch(action.type) {
		case ACTION_LOGIN:
			return statusProcess(actionState, 'loggingin', action);
		case ACTION_REGISTER:
			return statusProcess(actionState, 'registering', action);
		case ACTION_GET_ORDERS:
			return statusProcess(actionState, 'loadingOrders', action);
		case ACTION_GET_PRODUCTS:
			return statusProcess(actionState, 'loadingProducts', action);
		case ACTION_GET_DISTRICTS:
			return statusProcess(actionState, 'loadingDistricts', action);
		case ACTION_GET_USER_ADDRESSES:
			return statusProcess(actionState, 'loadingAddresses', action);
		case ACTION_GET_VOUCHERS:
			return statusProcess(actionState, 'loadingVouchers', action);
		case ACTION_GET_ORDER_DETAIL:
			return statusProcess(actionState, 'loadingOrder', action);
		case ACTION_GET_USER_PROFILE:
			return statusProcess(actionState, 'loadingUserProfile', action);
		case ACTION_RESET_PASSWORD:
			return statusProcess(actionState, 'updatingPassword', action);
		case ACTION_CREATE_ADDRESS:
		case ACTION_EDIT_ADDRESS:
			return statusProcess(actionState, 'updatingAddress', action);
		case ACTION_EDIT_AVATAR:
		case ACTION_EDIT_USER_PROFILE:
			return statusProcess(actionState, 'updatingUserProfile', action);
		case ACTION_CREATE_ORDER:
			return statusProcess(actionState, 'creatingOrder', action);
		case ACTION_TOPUP:
		case ACTION_PAY_ORDER_BY_PAYPAL:
			return statusProcess(actionState, 'paying', action);
		case ACTION_PAY_ORDER_BY_CREDIT:
			return statusProcess(actionState, 'creditPaying', action);
		case ACTION_FORGOT_PASSWORD:
			return statusProcess(actionState, 'forgotingPassword', action);
		case ACTION_LOGOUT:
			return {};
		default:
			return actionState;
	}
}