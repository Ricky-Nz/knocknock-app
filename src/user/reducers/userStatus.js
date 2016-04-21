import {
	ACTION_LOGIN, ACTION_REGISTER
} from '../actions';

export default function (status = {}, {type, running, error}) {
	switch(type) {
		case ACTION_LOGIN:
			if (running) {
				return {logging: true};
			} else {
				return {logging: false, processSuccess: !error};
			}
		case ACTION_REGISTER:
			if (running) {
				return {registing: true};
			} else {
				return {registing: false, processSuccess: !error};
			}
		default:
			return status;
	}
}