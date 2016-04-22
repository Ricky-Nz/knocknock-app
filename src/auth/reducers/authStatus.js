import { ACTION_LOGIN, ACTION_REGISTER, ACTION_FORGOT_PASSWORD } from '../actions';

function statusProcess(statusName, {running, error}) {
	if (running) {
		return {[statusName]: true};
	} else {
		return {[statusName]: false, processSuccess: !error};
	}
}

export default function (status = {}, action) {
	switch(action.type) {
		case ACTION_LOGIN:
			return statusProcess('logging', action);
		case ACTION_REGISTER:
			return statusProcess('registing', action);
		case ACTION_FORGOT_PASSWORD:
			return statusProcess('processing', action)
		default:
			return status;
	}
}