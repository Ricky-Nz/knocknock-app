import {
	ACTION_LOGIN, ACTION_REGISTER, ACTION_RESET_PASSWORD
} from '../actions';

function statusProcess(statusName, running, error) {
	if (running) {
		return {[statusName]: true};
	} else {
		return {[statusName]: false, processSuccess: !error};
	}
}

export default function (status = {}, {type, running, error}) {
	switch(type) {
		case ACTION_LOGIN:
			return statusProcess('logging');
		case ACTION_REGISTER:
			return statusProcess('registing');
		case ACTION_RESET_PASSWORD:
			return statusProcess('processing');
		default:
			return status;
	}
}