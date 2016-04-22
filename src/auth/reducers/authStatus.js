import { ACTION_LOGIN, ACTION_REGISTER, ACTION_FORGOT_PASSWORD } from '../actions';
import { processStatus } from '../../utils';

export default function (status = {}, action) {
	switch(action.type) {
		case ACTION_LOGIN:
			return statusProcess(action, 'logging', status);
		case ACTION_REGISTER:
			return statusProcess(action, 'registing', status);
		case ACTION_FORGOT_PASSWORD:
			return statusProcess(action, 'processing', status)
		default:
			return status;
	}
}