import { ACTION_LIST_ADDRESSES, ACTION_CREATE_ADDRESS, ACTION_EDIT_ADDRESS,
	ACTION_DELETE_ADDRESS, ACTION_GET_ADDRESS } from '../actions';
import { processStatus } from '../../utils';

export default function (status = {}, action) {
	switch(action.type) {
		case ACTION_LIST_ADDRESSES:
		case ACTION_CREATE_ADDRESS:
		case ACTION_EDIT_ADDRESS:
		case ACTION_GET_ADDRESS:
		case ACTION_DELETE_ADDRESS:
			return processStatus(action);
		default:
			return status;
	}
}