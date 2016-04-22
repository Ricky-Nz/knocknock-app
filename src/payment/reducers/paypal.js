import { ACTION_PAY_BY_PAYPAL, ACTION_TOPUP_BY_PAYPAL } from '../actions';

export default function (paypal = null, {type, running, error, data}) {
	switch(type) {
		case ACTION_PAY_BY_PAYPAL:
			if (running) {
				return {};
			} else if (!error&&data&&data.status&&data.info) {
				return {token: data.info};
			} else {
				return null;
			}
		case ACTION_TOPUP_BY_PAYPAL:
			if (running) {
				return {};
			} else if (!error&&data&&data.status) {
				return {
					token: data.info,
					redirectUrl: data.redirect_url
				};
			} else {
				return null;
			}
		default:
			return paypal;
	}
}