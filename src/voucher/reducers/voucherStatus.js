import { ACTION_LIST_VOUCHERS } from '../actions';
import { processStatus } from '../../utils';

export default function (status = {}, action) {
	switch(action.type) {
		case ACTION_LIST_VOUCHERS:
			return processStatus(action);
		default:
			return status;
	}
}