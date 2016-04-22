import { ACTION_LIST_PRODUCTS } from '../actions';
import { processStatus } from '../../utils';

export default function (status = {}, action) {
	switch(action.type) {
		case ACTION_LIST_PRODUCTS:
			return processStatus(action);
		default:
			return status;
	}
}