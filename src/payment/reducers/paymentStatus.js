import { ACTION_TOPUP, ACTION_PAY_BY_PAYPAL, ACTION_PAY_BY_CREDIT } from '../actions';

export default function (status = {}, {type, running, error}) {
	switch(type) {
		case ACTION_TOPUP:
		case ACTION_PAY_BY_PAYPAL:
		case ACTION_PAY_BY_CREDIT:
			if (running) {
				return {processing: true};
			} else {
				return {processing: false, processSuccess: !error}
			}
		default:
			return status;
	}
}