import { ACTION_LIST_VOUCHERS } from '../actions';

function statusProcess(statusName, running, error) {
	if (running) {
		return {[statusName]: true};
	} else {
		return {[statusName]: false, processSuccess: !error};
	}
}

export default function (status = {}, {type, running, error}) {
	switch(type) {
		case ACTION_LIST_VOUCHERS:
			return statusProcess('processing', running, error);
		default:
			return status;
	}
}