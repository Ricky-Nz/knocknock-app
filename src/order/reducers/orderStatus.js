import { ACTION_CREATE_ORDER, ACTION_GET_ORDER, ACTION_LIST_ORDERS } from '../actions';
import { processStatus } from '../../utils';

export default function (status = {}, action) {
	switch(action.type) {
		case ACTION_GET_ORDER:
		case ACTION_LIST_ORDERS:
			return statusProcess(action, 'processing', status);
		case ACTION_CREATE_ORDER:
			return statusProcess(action, 'creating', status);
		default:
			return status;
	}
}