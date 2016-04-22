import { ACTION_TOAST_MESSAGE } from '../actions';
import { ACTION_FORGOT_PASSWORD } from '../../auth';

export default function (toast = {}, {type, data, error, arg}) {
	switch(type) {
		case ACTION_TOAST_MESSAGE:
			return {message: data};
		case ACTION_FORGOT_PASSWORD:
			if (error) {
				return {...error};
			} else {
				return {message: `new password already sent to ${arg}`};
			}
		default:
			return toast;
	}
}