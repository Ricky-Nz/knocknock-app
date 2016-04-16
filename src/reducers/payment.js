import { ACTION_PAY_ORDER_BY_PAYPAL, ACTION_TOPUP, ACTION_LOGOUT } from '../actions';

export default function (payment = null, {type, running, error, data}) {
	switch(type) {
		case ACTION_PAY_ORDER_BY_PAYPAL:
			if (!running&&!error&&data&&data.status&&data.info) {
				return {expressInfo: data.info};
			} else {
				return null;
			}
		case ACTION_TOPUP:
			if (!running&&!error&&data&&data.status) {
				return {
					expressInfo: data.info,
					redirectUrl: data.redirect_url
				};
			} else {
				return null;
			}
		case ACTION_LOGOUT:
			return null;
		default:
			return payment;
	}
}