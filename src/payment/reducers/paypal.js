import { ACTION_PAY_BY_PAYPAL } from '../actions';

export default function (paypal = null, {type, running, error, data}) {
	switch(type) {
		case ACTION_PAY_ORDER_BY_PAYPAL:
			if (!running&&!error&&data&&data.status&&data.info) {
				return data.info;
			} else {
				return null;
			}
		default:
			return paypal;
	}
}