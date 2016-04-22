import { ACTION_TOPUP, ACTION_PAY_BY_PAYPAL, ACTION_PAY_BY_CREDIT } from '../actions';
import { processStatus } from '../../utils';

export default function (status = {}, action) {
	switch(action.type) {
		case ACTION_TOPUP:
		case ACTION_PAY_BY_PAYPAL:
		case ACTION_PAY_BY_CREDIT:
			return processStatus(action);
		default:
			return status;
	}
}