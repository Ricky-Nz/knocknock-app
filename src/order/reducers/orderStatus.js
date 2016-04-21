import { ACTION_CREATE_ORDER, ACTION_GET_ORDER, ACTION_LIST_ORDERS } from '../actions';

function statusProcess(argument) {
	// body...
}

export default function (status = {}, {type, running, error}) {
	switch(type) {
		case ACTION_GET_ORDER:
		case ACTION_LIST_ORDERS:
			if (running) {
				return {processing: true};
			} else {
				return {processing: false, processSuccess: !error}
			}
		case ACTION_CREATE_ORDER:
			if (running) {
				return {creating: true};
			} else {
				return {creating: false, processSuccess: !error};
			}
		default:
			return status;
	}
}