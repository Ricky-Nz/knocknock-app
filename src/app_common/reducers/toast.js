import { ACTION_TOAST_MESSAGE,
	ACTION_LOGIN, ACTION_GET_USER_ADDRESSES,
	ACTION_GET_DISTRICTS, ACTION_GET_PRODUCTS, ACTION_GET_ORDERS, ACTION_REGISTER,
	ACTION_CREATE_ADDRESS, ACTION_EDIT_ADDRESS,
	ACTION_GET_VOUCHERS, ACTION_RESET_PASSWORD, ACTION_GET_USER_PROFILE,
	ACTION_EDIT_USER_PROFILE, ACTION_CREATE_ORDER, ACTION_EDIT_AVATAR,
	ACTION_GET_ORDER_DETAIL, ACTION_TOPUP, ACTION_LOGOUT,
	ACTION_PAY_ORDER_BY_CREDIT, ACTION_FORGOT_PASSWORD
} from '../actions';

export default function (toast = {}, {type, running, arg, error, data}) {
	switch(type) {
		case ACTION_TOAST_MESSAGE:
			return {message: data};
		case ACTION_LOGOUT:
			return toast;
		case ACTION_LOGIN:
		case ACTION_REGISTER:
		case ACTION_GET_ORDERS:
		case ACTION_GET_PRODUCTS:
		case ACTION_GET_DISTRICTS:
		case ACTION_GET_USER_ADDRESSES:
		case ACTION_GET_VOUCHERS:
		case ACTION_GET_ORDER_DETAIL:
		case ACTION_GET_USER_PROFILE:
		case ACTION_RESET_PASSWORD:
		case ACTION_CREATE_ADDRESS:
		case ACTION_EDIT_ADDRESS:
		case ACTION_EDIT_AVATAR:
		case ACTION_EDIT_USER_PROFILE:
		case ACTION_CREATE_ORDER:
		case ACTION_TOPUP:
		case ACTION_PAY_ORDER_BY_CREDIT:
		case ACTION_FORGOT_PASSWORD:
			if (!running) {
				if (error) {
					return {message: error.message||'Request failed'};
				} else {
					switch(type) {
						case ACTION_PAY_ORDER_BY_CREDIT:
							return {message: 'Payment success'};
						case ACTION_REGISTER:
							return toast; // skip toast
						case ACTION_RESET_PASSWORD:
							return {message: 'Reset password success'};
						case ACTION_CREATE_ADDRESS:
							return {message: 'Create new address success'};
						case ACTION_EDIT_ADDRESS:
						case ACTION_EDIT_AVATAR:
						case ACTION_EDIT_USER_PROFILE:
							return {message: 'Update success'};
						case ACTION_CREATE_ORDER:
							return {message: 'New order created'};
						case ACTION_FORGOT_PASSWORD:
							return {message: 'A new password already send to your email'};
						default:
							if (arg) {
								return {message: 'Refresh success'};
							}
					}
				}
			}
		default:
			return toast;
	}
}