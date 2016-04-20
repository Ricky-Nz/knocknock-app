import {
	ACTION_LIST_ADDRESSES,
	ACTION_CREATE_ADDRESS, ACTION_EDIT_ADDRESS,
	ACTION_DELETE_ADDRESS, ACTION_GET_ADDRESS
} from '../actions';

export default function (status = {}, {type, running, error}) {
	switch(type) {
		case ACTION_LIST_ADDRESSES:
		case ACTION_CREATE_ADDRESS:
		case ACTION_EDIT_ADDRESS:
		case ACTION_GET_ADDRESS:
		case ACTION_DELETE_ADDRESS:
			if (running) {
				return {processing: true};
			} else {
				return {processing: false, processSuccess: !error};
			}
		default:
			return status;
	}
}